const mongoose = require('mongoose');

const SkillsSchema = new mongoose.Schema({
	name: { type: String, required: true },
}, { timestamps: true })

module.export = mongoose.model("Skills", SkillsSchema);