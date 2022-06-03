import React, { useState, useContext } from 'react';
import { TextInput, Button, Switch, Modal } from '@mantine/core';
import { createVideo } from '../../../context/videoContext/apiCalls';
import { VideoContext } from '../../../context/videoContext/VideoContext';

const AddVideo = ({ openedAdd, setOpenedAdd }) => {
  const { dispatch } = useContext(VideoContext);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [featuredVideo, setFeaturedVideo] = useState(false);

  const handleSubmit = () => {
    const video = {
      image: image,
      title: title,
      videoLink: videoLink,
      featuredVideo: featuredVideo
    }
    createVideo(video, dispatch);
  }

  return (
  <>
    <Modal
    opened={openedAdd}
    onClose={() => setOpenedAdd(false)}
    title={`Add New Video`}
    size="lg"
    >
    <TextInput
    variant="filled"
    label="Thumbnail Image"
    placeholder='URL to image'
    id="image"
    size="md"
    required
    onChange={(e) => setImage(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="Title"
    placeholder='Title of video'
    id="title"
    size="md"
    required
    onChange={(e) => setTitle(e.target.value)}
    />
    <TextInput
    variant="filled"
    placeholder="Video Link"
    label="Video Link"
    id="videoLink"
    size="md"
    required
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
      <Button type="Submit" variant="light" size="sm" color="green" onClick={handleSubmit}>Add Video</Button>
    </div>

    </Modal>

  </>
  )
}

export default AddVideo;