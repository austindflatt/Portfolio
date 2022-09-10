import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { TextInput, Switch, Button, Modal } from '@mantine/core';
import { updateVideo } from '../../../context/videoContext/apiCalls';
import { VideoContext } from '../../../context/videoContext/VideoContext';

const EditVideo = ({ editId, opened, setOpened }) => {
  const { dispatch } = useContext(VideoContext);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [featuredVideo, setFeaturedVideo] = useState(false);

  useEffect(() => {
    const getEditData = async () => {
      const response = await axios.get(`http://portfolioserver-env.eba-mrpmux5a.us-east-2.elasticbeanstalk.com/api/videos/find/${editId}`);
      const data = response.data.payload;
      setImage(data.image);
      setTitle(data.title);
      setVideoLink(data.videoLink);
      setFeaturedVideo(data.featuredVideo);
    }
    getEditData();
  }, [editId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = {
      id: editId,
      image: image,
      title: title,
      videoLink: videoLink,
      featuredVideo: featuredVideo
    }
    updateVideo(updatedData, dispatch);
  }

  return (
  <>
    <Modal
    opened={opened}
    onClose={() => setOpened(false)}
    title={`Edit ${title}`}
    size="lg"
    >
    <TextInput
    variant="filled"
    label="Image"
    id="image"
    size="md"
    value={image}
    onChange={(e) => setImage(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="Title"
    id="title"
    size="md"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="Video Link"
    id="videoLink"
    size="md"
    value={videoLink}
    onChange={(e) => setVideoLink(e.target.value)}
    />
    <Switch 
    label="Show as a featured video" 
    size="md" 
    id="featuredVideo" 
    checked={featuredVideo}
    onChange={() => setFeaturedVideo(!featuredVideo)} 
    style={{ marginTop: '10px' }}
    />

    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="sm" color='orange' onClick={handleUpdate}>Update Video</Button>
    </div>
    </Modal>
  </>
  )
}

export default EditVideo;