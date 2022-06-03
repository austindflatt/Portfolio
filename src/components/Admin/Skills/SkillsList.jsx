import React, { useState, useContext, useEffect } from 'react'
import { TextInput, Table, ScrollArea, Button, Loader } from '@mantine/core';
import { SkillContext } from '../../../context/skillContext/SkillContext';
import { deleteSkill, getSkills } from '../../../context/skillContext/apiCalls';
import { Search } from 'tabler-icons-react';
import AddSkill  from './AddSkill';
import { Pagination } from '@mui/material';
import EditSkill from '../Skills/EditSkill';

const SkillsList = () => {
  const { skills, isFetching, dispatch } = useContext(SkillContext);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [opened, setOpened] = useState(false);
  const [openedAdd, setOpenedAdd] = useState(false);
  const [editId, setEditId] = useState('');

  useEffect(() => {
    getSkills(dispatch);
  }, [dispatch]);
  
  const handleDelete = (id) => {
    deleteSkill(id, dispatch);
  }

  const showEdit = (id) => {
    setEditId(id);
    setOpened(true);
  }

  const showAdd = () => {
    setOpenedAdd(true);
  }

  return (
    <>
    <EditSkill
      editId={editId}
      opened={opened}
      setOpened={setOpened}
    />

    <AddSkill 
      openedAdd={openedAdd}
      setOpenedAdd={setOpenedAdd}
    />
    
    <Button type="Submit" variant="light" color="green" size="sm" onClick={() => showAdd()}>Add New Skill</Button>

    <TextInput
      size="md"
      variant="unstyled"
      placeholder="Search by skill name"
      onChange={(e) => setSearch(e.target.value)}
      rightSectionWidth={42}
      style={{ marginTop: '20px', marginBottom: '20px' }}
      icon={<Search size={14} />}
    />
    {isFetching ?
    <Loader variant="dots" size="xl" color="green" style={{ width: '100%', display: 'flex', justifyContent: 'center' }} />
    :
    <>
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
        <thead>
          <tr>
            <th>Skill Name</th>
            <th>Added On</th>
            <th>Last Updated</th>
            <th>Skill Actions</th>
          </tr>
        </thead>
        <tbody>
        {
        skills
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        .filter((skill) => {
          if(search === ''){
            return true
          } else if(skill.name.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          return false
        })
        .map((skill) => {
          return (
            <tr key={skill._id}>
            <td>{skill.name}</td>
            <td>{skill.createdAt}</td>
            <td>{skill.updatedAt}</td>
            <td>
              <Button type="Submit" variant="light" color="orange" size="sm" style={{ marginRight: '10px' }} onClick={() => showEdit(skill._id)}>Edit</Button>
              <Button type="Submit" variant="light" color="red" size="sm" onClick={() => handleDelete(skill._id)}>Delete</Button>
            </td>
          </tr>
          )
        })
        }
        </tbody>
      </Table>
    </ScrollArea>
    <Pagination
    count={(skills.length / 10).toFixed(0)}
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

export default SkillsList;