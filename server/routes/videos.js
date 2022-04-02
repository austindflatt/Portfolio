const router = require('express').Router();
const Video = require('../models/videosModel');
const { verify } = require('./verifyToken');

// CREATE VIDEO
router.post('/create', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newVideo = new Video(req.body);
    try {
      const savedVideo = await newVideo.save();
      res.status(200).json({ message: 'Video created successfully', payload: savedVideo });
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

// UPDATE VIDEO
router.put('/update/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedVideo = await Video.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(updatedVideo);
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

// DELETE VIDEO
router.delete('/delete/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Video Info deleted successfully' });
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

// GET VIDEO
router.get('/find/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const video = await Video.findById(req.params.id);
      res.status(200).json({ message: 'Video Info', payload: video });
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

// GET ALL VIDEOS
router.get('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const videos = await Video.find();
      res.status(200).json(videos.reverse());
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You do not have permission!");
  }
});

module.exports = router;