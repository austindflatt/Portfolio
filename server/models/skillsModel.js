const mongoose = require('mongoose');

const SkillsSchema = new mongoose.Schema({
	name: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model("Skills", SkillsSchema);