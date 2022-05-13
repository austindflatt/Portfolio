import React, { useState, useContext } from 'react';
import { TextInput, Button } from '@mantine/core';
import { createSkill } from '../../../context/skillContext/apiCalls';
import { SkillContext } from '../../../context/skillContext/SkillContext';

const AddSkill = () => {
  const [skill, setSkill] = useState(null);
  const { dispatch } = useContext(SkillContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setSkill({ ...skill, [e.target.id]:value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createSkill(skill, dispatch);
  }

  return (
  <>
    <TextInput
    variant="filled"
    label="Add New Skill"
    placeholder='Skill Name'
    id="name"
    size="md"
    onChange={handleChange}
    />
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" color='green' size="sm" onClick={handleSubmit}>Add Skill</Button>
    </div>

  </>
  )
}

export default AddSkill;