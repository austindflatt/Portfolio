const router = require('express').Router();
const User = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { verify } = require('./verifyToken');

// UPDATE
router.put('/update/:id', async (req, res) => {
	const slicedToken = req.headers.authorization.slice(7);
	const decodedToken = jwt.verify(slicedToken, process.env.SECRET_KEY);

	res.locals.decodedToken = decodedToken;
	const foundUser = await User.findOne({ email: decodedToken.email });

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	req.body.password = hashedPassword;

	if(foundUser._id.toString() === req.params.id) {
		try {
			const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
			});
			res.status(200).json({ message: 'Updated user', payload: updatedUser });
		} catch (error) {
			res.status(500).json({ message: error, error: error.message });
		} 
	} else {
		return res.status(403).json({
			message: 'You can only update your account'
		})
	}
})

// DELETE

// GET USERS

// GET ALL USERS

module.exports = router;