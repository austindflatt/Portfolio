import React, { useState, useContext, useEffect } from 'react';
import { TextInput, Table, Checkbox, Anchor, ScrollArea, Button, Modal, Loader } from '@mantine/core';
import { ProjectContext } from '../../../context/projectContext/ProjectContext';
import { deleteProject, getProjects } from '../../../context/projectContext/apiCalls';
import AddProject from './AddProject';
import EditProject from './EditProject';
import { Search } from 'tabler-icons-react';
import { Pagination } from '@mui/material';

const ProjectsList = () => {
  const { projects, isFetching, dispatch } = useContext(ProjectContext);
  const [opened, setOpened] = useState(false);
  const [edit, setEdit] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    getProjects(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProject(id, dispatch);
  }

  return (
    <>
    <Modal
    opened={opened}
    onClose={() => setOpened(false)}
    title="Add Project"
    size="lg"
    >
      <AddProject />
    </Modal>

    <Modal
    opened={edit}
    onClose={() => setEdit(false)}
    title="Edit Project"
    size="lg"
    >
      <EditProject />
    </Modal>
    <Button type="Submit" variant="light" color="green" size="sm" onClick={() => setOpened(true)}>Add New</Button>
    <TextInput
      size="md"
      placeholder="Search by title"
      onChange={(e) => setSearch(e.target.value)}
      rightSectionWidth={42}
      style={{ marginTop: '20px', marginBottom: '20px' }}
      icon={<Search size={24} color='black' />}
    />
    {isFetching ?
    <Loader variant="dots" size="xl" color="green" style={{ width: '100%', display: 'flex', justifyContent: 'center' }} />
    :
    <>
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <Checkbox
              onChange={() => console.log('Clicked')}
              checked=''
              indeterminate=''
              transitionDuration={0}
              />
            </th>
            <th>Title</th>
            <th>Added On</th>
            <th>Live Link</th>
            <th>GitHub</th>
            <th>Featured</th>
            <th>Project Actions</th>
          </tr>
        </thead>
        <tbody>
        {
        projects
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        .filter((project) => {
          if(search === ''){
            return true
          } else if(project.title.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          return false
        })
        .map((project) => {
          return (
            <tr key={project._id}>
            <td>
              <Checkbox
              checked=''
              onChange={() => console.log('Clicked')}
              transitionDuration={0}
              />
            </td>
            <td>{project.title}</td>
            <td>{project.createdAt}</td>
            <td>{project.liveLink ? <Anchor size="sm" href={project.liveLink} target='_blank'>View Live</Anchor> : <>N/A</>}</td>
            <td><Anchor size="sm" href={project.githubLink} target='_blank'>View Code</Anchor></td>
            <td>{project.featuredProject ? <>Yes</> : <>No</>}</td>
            <td>
              <Button type="Submit" variant="light" color="orange" size="sm" style={{ marginRight: '10px' }} onClick={() => setEdit(true)}>Edit</Button>
              <Button type="Submit" variant="light" color="red" size="sm" onClick={() => handleDelete(project._id)}>Delete</Button>
            </td>
          </tr>
          )
        })
        }
        </tbody>
      </Table>
    </ScrollArea>
    <Pagination
    count={(projects.length / 10).toFixed(0)}
    onChange={(_, value) => {
      setPage(value);
      window.scroll(0, 450);
    }}
    style={{ padding: 20, width: '100%', display: 'flex', justifyContent: 'center' }}
    />
    </>
    }
    </>
  )
}

export default ProjectsList