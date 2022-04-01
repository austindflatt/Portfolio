const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth')

dotenv.config();

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => {
		console.log(err)
	});

app.use(express.json());
app.use('/api/auth', authRoute);

app.listen(3001, () => {
	console.log('Server is running...')
})