const router = require('express').Router();
const Project = require('../models/projectsModel');
const CryptoJS = require("crypto-js");
const { verify } = require('./verifyToken');

// CREATE PROJECT
router.post('/add-project', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newProject = new Project(req.body);

    try {
      const savedProject = await newProject.save();
      res.status(200).json({ message: 'Project created successfully', payload: savedProject });
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

// UPDATE PROJECT
router.put('/update-project/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedProject = await Project.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(updatedProject);
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

// DELETE PROJECT
router.delete('/delete-project/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Project.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

// GET PROJECT
router.get('/find-project/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const project = await Project.findById(req.params.id);
      res.status(200).json({ message: 'Project Info', payload: project });
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

// GET ALL PROJECTS
router.get('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const projects = await Project.find();
      res.status(200).json(projects.reverse());
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

module.exports = router;