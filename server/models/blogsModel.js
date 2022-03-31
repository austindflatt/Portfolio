const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	category: { type: String, required: true },
	image: { type: String, required: true }
}, { timestamps: true })

module.export = mongoose.model("Blog", BlogSchema);