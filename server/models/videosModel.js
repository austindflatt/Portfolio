const mongoose = require('mongoose');

const VideosSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	image: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model("Videos", VideosSchema);