import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from '@mantine/core';

function ViewProject({ viewId, opened, setOpened }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tech, setTechUsed] = useState('');
  useEffect(() => {
    const getProjectData = async () => {
      const response = await axios.get(`https://secure-savannah-93086.herokuapp.com/api/projects/find/${viewId}`);
      const data = response.data.payload;
      setTitle(data.title);
      setDescription(data.description);
      setTechUsed(data.techUsed);
    }
    getProjectData();
  }, [viewId]);

  return (
  <Modal
  opened={opened}
  onClose={() => setOpened(false)}
  title={`Project Title: ${title}`}
  size="lg"
  >
    <div>
    <div style={{ marginBottom: '10px' }}>{description}</div>
    <div style={{ marginBottom: '10px' }}>Technologies I Used: {tech}</div>
    </div>
  </Modal>
  )
}

export default ViewProject;