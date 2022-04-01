const router = require('express').Router();
const User = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register', async (req, res) => {
	const { username, firstName, lastName, email, password } = req.body;

	let salt = await bcrypt.genSalt(10);
	let hashedPassword = await bcrypt.hash(password, salt);

	const newUser = new User({
		username: username,
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: hashedPassword
	});
	try {
		const user = await newUser.save();
		res.status(200).json({ message: 'User created successfully', payload: user });
	} catch (error) {
		res.status(500).json(error);
	}
})

// LOGIN
router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const foundUser = await User.findOne({ email: email });
		
		if(foundUser === null) throw { message: 'Email and Password do not match' };
		
		const comparedPassword = await bcrypt.compare(password, foundUser.password);
		if(!comparedPassword) throw { message: 'Email and Password do not match' };

		const jwtToken = jwt.sign({
			_id: foundUser._id,
			username: foundUser.username,
			firstName: foundUser.firstName,
			lastName: foundUser.lastName,
			email: foundUser.email,
			isAdmin: foundUser.isAdmin
        }, process.env.SECRET_KEY, { expiresIn: '24h' });
		res.status(200).json({ message: 'Logged in successfully', payload: jwtToken });
	} catch (error) {
		res.status(500).json(error);
	}
})

module.exports = router;