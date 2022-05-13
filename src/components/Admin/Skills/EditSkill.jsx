import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { TextInput, Button, Modal } from '@mantine/core';
import { updateSkill } from '../../../context/skillContext/apiCalls';
import { SkillContext } from '../../../context/skillContext/SkillContext';

const EditSkill = ({ editId, opened, setOpened }) => {
  const { dispatch } = useContext(SkillContext);
  const [skill, setSkill] = useState('');

  useEffect(() => {
    const getEditData = async () => {
      const response = await axios.get(`https://secure-savannah-93086.herokuapp.com/api/skills/find/${editId}`);
      const data = response.data.payload;
      setSkill(data.name);
    }
    getEditData();
  }, [editId]);

  const handleUpdate = (e) => {
    e.preventDefault()
    const updatedData = {
      id: editId,
      name: skill,
    }
    updateSkill(updatedData, dispatch);
  }

  return (
  <>
    <Modal
    opened={opened}
    onClose={() => setOpened(false)}
    title={`Edit ${skill}`}
    size="lg"
    >
    <TextInput
    variant="filled"
    label="Skill Name"
    id="name"
    size="md"
    value={skill}
    onChange={(e) => setSkill(e.target.value)}
    />

    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="sm" color='orange' onClick={handleUpdate}>Update Skill</Button>
    </div>
    </Modal>
  </>
  )
}

export default EditSkill;