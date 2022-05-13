import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { TextInput, Textarea, Button, Modal } from '@mantine/core';
import { updateProject } from '../../../context/projectContext/apiCalls';
import { ProjectContext } from '../../../context/projectContext/ProjectContext';

const EditProject = ({ editId, opened, setOpened }) => {
  const { dispatch } = useContext(ProjectContext);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techUsed, setTechUsed] = useState([]);
  const [liveLink, setLiveLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [youtubeId, setYoutubeId] = useState('');

  useEffect(() => {
    const getEditData = async () => {
      const response = await axios.get(`https://secure-savannah-93086.herokuapp.com/api/projects/find/${editId}`);
      const data = response.data.payload;
      setImage(data.image);
      setTitle(data.title);
      setDescription(data.description);
      setTechUsed(data.techUsed);
      setLiveLink(data.liveLink);
      setGithubLink(data.githubLink);
      setYoutubeId(data.youtubeId);
    }
    getEditData();
  }, [editId]);

  const handleUpdate = (e) => {
    e.preventDefault()
    const updatedData = {
      id: editId,
      image: image,
      title: title,
      description: description,
      techUsed: techUsed,
      liveLink: liveLink,
      githubLink: githubLink,
      youtubeId: youtubeId
    }
    updateProject(updatedData, dispatch);
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
    <Textarea
    variant="filled"
    label="Description"
    id="description"
    size="md"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="Tech Used"
    id="techUsed"
    size="md"
    value={techUsed}
    onChange={(e) => setTechUsed(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="GitHub Link"
    id="githubLink"
    size="md"
    value={githubLink}
    onChange={(e) => setGithubLink(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="Live Link"
    id="liveLink"
    size="md"
    value={liveLink}
    onChange={(e) => setLiveLink(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="YouTube ID"
    id="ytId"
    size="md"
    value={youtubeId}
    onChange={(e) => setYoutubeId(e.target.value)}
    />

    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="sm" color='orange' onClick={handleUpdate}>Update Project</Button>
    </div>
    </Modal>
  </>
  )
}

export default EditProject;