import React, { useState, useContext, useEffect } from 'react'
import { TextInput, Table, Checkbox, ScrollArea, Button } from '@mantine/core';
import { SkillContext } from '../../../context/skillContext/SkillContext';
import { deleteSkill, getSkills } from '../../../context/skillContext/apiCalls';
import { Search } from 'tabler-icons-react';
import AddSkill  from './AddSkill'

const SkillsList = () => {
  const { skills, dispatch } = useContext(SkillContext);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getSkills(dispatch);
  }, [dispatch]);
  
  const handleDelete = (id) => {
    deleteSkill(id, dispatch);
  }

  return (
    <>
    <AddSkill />
    <TextInput
      size="md"
      placeholder="Search by skill name"
      onChange={(e) => setSearch(e.target.value)}
      rightSectionWidth={42}
      style={{ marginTop: '20px', marginBottom: '20px' }}
      icon={<Search size={24} color='black' />}
    />
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
            <th>Skill Name</th>
            <th>Added On</th>
            <th>Last Updated</th>
            <th>Skill Actions</th>
          </tr>
        </thead>
        <tbody>
        {
        skills
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
            <td>
              <Checkbox
              checked=''
              onChange={() => console.log('Clicked')}
              transitionDuration={0}
              />
            </td>
            <td>{skill.name}</td>
            <td>{skill.createdAt}</td>
            <td>{skill.updatedAt}</td>
            <td>
              <Button type="Submit" variant="light" color="orange" size="sm" style={{ marginRight: '10px' }}>Edit</Button>
              <Button type="Submit" variant="light" color="red" size="sm" onClick={() => handleDelete(skill._id)}>Delete</Button>
            </td>
          </tr>
          )
        })
        }
        </tbody>
      </Table>
    </ScrollArea>
    </>
  )
}

export default SkillsList