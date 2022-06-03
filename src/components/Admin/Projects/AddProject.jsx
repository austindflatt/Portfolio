import React, { useState, useContext } from 'react';
import { TextInput, Textarea, Text, Button, Switch, Modal } from '@mantine/core';
import { createProject } from '../../../context/projectContext/apiCalls';
import { ProjectContext } from '../../../context/projectContext/ProjectContext';

const AddProject = ({ openedAdd, setOpenedAdd }) => {
  const { dispatch } = useContext(ProjectContext);
  const [image, setImage] = useState('');
  // const [url, setUrl] = useState("");
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techUsed, setTechUsed] = useState([]);
  const [liveLink, setLiveLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [youtubeId, setYoutubeId] = useState('');
  const [featured, setFeatured] = useState(false);

  const handleSubmit = () => {
    const project = {
      image: image,
      title: title,
      description: description,
      techUsed: techUsed,
      liveLink: liveLink,
      githubLink: githubLink,
      youtubeId: youtubeId,
      featuredProject: featured
    }
    createProject(project, dispatch);
  }

  return (
  <>
    <Modal
    opened={openedAdd}
    onClose={() => setOpenedAdd(false)}
    title={`Add New Project`}
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
    <Text size="sm" weight={500}>Upload Project Image</Text>
    {/* <input 
    id="image" 
    type="file"
    accept="image/*"
    onChange={(e) => setImage(e.target.files[0])}
    style={{ marginBottom: '10px' }}
    /> */}
    <TextInput
    variant="filled"
    label="Title"
    placeholder='Title of project'
    id="title"
    size="md"
    required
    onChange={(e) => setTitle(e.target.value)}
    />
    <Textarea
    variant="filled"
    label="Description"
    id="description"
    placeholder="Give a description of this project"
    size="md"
    required
    onChange={(e) => setDescription(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="Tech Used"
    placeholder="JavaScript, React, MERN"
    id="techUsed"
    size="md"
    required
    onChange={(e) => setTechUsed(e.target.value)}
    />
    <TextInput
    variant="filled"
    placeholder="GitHub Link"
    label="GitHub Link"
    id="githubLink"
    size="md"
    required
    onChange={(e) => setGithubLink(e.target.value)}
    />
    <TextInput
    variant="filled"
    placeholder="Live Link"
    label="Live Link"
    id="liveLink"
    size="md"
    onChange={(e) => setLiveLink(e.target.value)}
    />
    <TextInput
    variant="filled"
    placeholder="YouTube ID"
    label="YouTube ID"
    id="youtubeId"
    size="md"
    onChange={(e) => setYoutubeId(e.target.value)}
    />
    <Switch 
    label="Show as a featured project" 
    size="md" 
    id="featuredProject" 
    checked={featured} 
    onChange={(e) => setFeatured(!featured)} 
    style={{ marginTop: '10px' }}
    />

    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="sm" color="green" onClick={handleSubmit}>Add Project</Button>
    </div>

    </Modal>

  </>
  )
}

export default AddProject;