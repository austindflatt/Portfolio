const router = require('express').Router();
const Skill = require('../models/skillsModel');
const { verify } = require('./verifyToken');

// CREATE SKILL
router.post('/create', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newSkill = new Skill(req.body);
    try {
      const savedSkill = await newSkill.save();
      res.status(200).json({ message: 'Skill created successfully', payload: savedSkill });
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

// UPDATE SKILL
router.put('/update/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(updatedSkill);
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

// DELETE SKILL
router.delete('/delete/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Skill.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Skill Info deleted successfully' });
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

// GET SKILL
router.get('/find/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const skill = await Skill.findById(req.params.id);
      res.status(200).json({ message: 'Skill Info', payload: skill });
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

// GET ALL SKILLS
router.get('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const skills = await Skill.find();
      res.status(200).json(skills.reverse());
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

module.exports = router;