import React, { useState, useContext } from 'react';
import { TextInput, Textarea, Button, Modal } from '@mantine/core';
import { createProject } from '../../../context/projectContext/apiCalls';
import { ProjectContext } from '../../../context/projectContext/ProjectContext';

const AddProject = ({ openedAdd, setOpenedAdd }) => {
  const [project, setProject] = useState(null);
  const { dispatch } = useContext(ProjectContext);
  // const [featured, setFeatured] = useState(false);
  // const [live, setLive] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setProject({ ...project, [e.target.id]:value })
  }

  const handleSubmit = () => {
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
    {/* <TextInput
    variant="filled"
    label="Thumbnail Image"
    placeholder='URL to image'
    id="image"
    size="md"
    required
    onChange={handleChange}
    /> */}
    <input 
    id="image-file" 
    type="file"
    accept="image/*"
    onChange={(e) => handleChange(e.target.files[0])}
    />
    <TextInput
    variant="filled"
    label="Title"
    placeholder='Title of project'
    id="title"
    size="md"
    required
    onChange={handleChange}
    />
    <Textarea
    variant="filled"
    label="Description"
    id="description"
    size="md"
    required
    onChange={handleChange}
    />
    <TextInput
    variant="filled"
    label="Tech Used"
    placeholder="React, Express, Node"
    id="techUsed"
    size="md"
    required
    onChange={handleChange}
    />
    <TextInput
    variant="filled"
    placeholder="GitHub Link"
    label="GitHub Link"
    id="githubLink"
    size="md"
    required
    onChange={handleChange}
    />
    <TextInput
    variant="filled"
    placeholder="Live Link"
    label="Live Link"
    id="liveLink"
    size="md"
    onChange={handleChange}
    />
    <TextInput
    variant="filled"
    placeholder="YouTube ID"
    label="YouTube ID"
    id="youtubeId"
    size="md"
    onChange={handleChange}
    />
    <TextInput
    variant="filled"
    placeholder="true or false"
    label="Featured Project"
    id="featuredProject"
    size="md"
    onChange={handleChange}
    />
    <TextInput
    variant="filled"
    placeholder="true or false"
    label="Show Live"
    id="showViewLive"
    size="md"
    onChange={handleChange}
    />

    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="sm" color="green" onClick={handleSubmit}>Add Project</Button>
    </div>

    </Modal>

  </>
  )
}

export default AddProject;