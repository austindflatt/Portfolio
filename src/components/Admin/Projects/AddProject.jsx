import React, { useState, useContext } from 'react';
import { TextInput, Textarea, Button, Switch } from '@mantine/core';
import { createProject } from '../../../context/projectContext/apiCalls';
import { ProjectContext } from '../../../context/projectContext/ProjectContext';

const AddProject = () => {
  const [project, setProject] = useState(null);
  const { dispatch } = useContext(ProjectContext);
  const [featured, setFeatured] = useState(false);
  const [live, setLive] = useState(false);

  console.log(featured)

  const handleChange = (e) => {
    const value = e.target.value;
    setProject({ ...project, [e.target.id]:value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject(project, dispatch);
  }

  return (
  <>
    <TextInput
    label="Thumbnail Image"
    placeholder='URL to image'
    id="image"
    size="md"
    required
    onChange={handleChange}
    />
    <TextInput
    label="Title"
    placeholder='Title of project'
    id="title"
    size="md"
    required
    onChange={handleChange}
    />
    <Textarea
    label="Description"
    id="description"
    size="md"
    required
    onChange={handleChange}
    />
    <TextInput
    label="Tech Used"
    placeholder="React, Express, Node"
    id="techUsed"
    size="md"
    required
    onChange={handleChange}
    />
    <TextInput
    placeholder="GitHub Link"
    label="GitHub Link"
    id="githubLink"
    size="md"
    required
    onChange={handleChange}
    />
    <TextInput
    placeholder="Live Link"
    label="Live Link"
    id="liveLink"
    size="md"
    onChange={handleChange}
    />
    <TextInput
    placeholder="YouTube ID"
    label="YouTube ID"
    id="youtubeId"
    size="md"
    onChange={handleChange}
    />
    <Switch
    label="Featured Project"
    size="md"
    radius="lg"
    color="dark"
    id="featuredProject"
    featured={featured}
    onChange={() => setFeatured(!featured)}
    style={{ marginTop: '10px', marginBottom: '10px' }}
    />
    <Switch
    label="Show Live Button"
    size="md"
    radius="lg"
    color="dark"
    id="showViewLive"
    live={live}
    onChange={() => setLive(!live)}
    style={{ marginTop: '10px', marginBottom: '10px' }}
    />

    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="sm" onClick={handleSubmit}>Add Project</Button>
    </div>

  </>
  )
}

export default AddProject;