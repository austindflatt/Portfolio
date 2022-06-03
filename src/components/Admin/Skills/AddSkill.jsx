import React, { useState, useContext } from 'react';
import { TextInput, Button, Modal } from '@mantine/core';
import { createSkill } from '../../../context/skillContext/apiCalls';
import { SkillContext } from '../../../context/skillContext/SkillContext';

const AddSkill = ({ openedAdd, setOpenedAdd }) => {
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
    <Modal
    opened={openedAdd}
    onClose={() => setOpenedAdd(false)}
    title={`Add New Skill`}
    size="lg"
    >
    <TextInput
    variant="filled"
    label="Skill Name"
    placeholder="e.g. React"
    id="name"
    size="md"
    required
    onChange={handleChange}
    />
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" color='green' size="sm" onClick={handleSubmit}>Add Skill</Button>
    </div>
    </Modal>
  </>
  )
}

export default AddSkill;