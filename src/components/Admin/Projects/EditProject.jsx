import React, { useState, useContext } from 'react';
import { TextInput, Textarea, Button } from '@mantine/core';
import { updateProject } from '../../../context/projectContext/apiCalls';
import { ProjectContext } from '../../../context/projectContext/ProjectContext';

const EditProject = () => {
  const [project, setProject] = useState(null);
  const { dispatch } = useContext(ProjectContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setProject({ ...project, [e.target.id]:value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProject(project, dispatch);
  }

  return (
  <>
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
    id="tech"
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
    placeholder="GitHub Link"
    label="GitHub Link"
    id="githubLink"
    size="md"
    required
    onChange={handleChange}
    />
    <TextInput
    placeholder="YouTube ID"
    label="YouTube ID"
    id="ytId"
    size="md"
    onChange={handleChange}
    />
    <label>Show as a featured project?</label>
    <select
    id='featured'
    onChange={handleChange}
    >
    <option value="false">No</option>
    <option value="true">Yes</option>
    </select>
    <label>Show live link?</label>
    <select
    id='showLive'
    onChange={handleChange}
    >
    <option value="false">No</option>
    <option value="true">Yes</option>
    </select>
    {/* <div>
      <label>Image</label>
      <input type='file' onChange={e=>setImage(e.target.files[0])}></input>
    </div> */}

    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="md" color='orange' onClick={handleSubmit}>Update Project</Button>
    </div>

  </>
  )
}

export default EditProject;