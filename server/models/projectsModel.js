const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	techUsed: { type: [String], required: true },
	image: { type: String },
	imageSmall: { type: String, required: true },
	previewVideo: { type: String },
	githubLink: { type: String, required: true, unique: true },
	liveLink: { type: String, unique: true },
	youtubeId: { type: String, required: true, unique: true },
	showViewLive: { type: Boolean, default: true },
	featuredProject: { type: Boolean, default: false }
}, { timestamps: true })

module.export = mongoose.model("Project", ProjectSchema);