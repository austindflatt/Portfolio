import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from '@mantine/core';

function ViewMessage({ viewId, opened, setOpened }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [sent, setSent] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    const getMessageData = async () => {
      const response = await axios.get(`https://secure-savannah-93086.herokuapp.com/api/messages/find/${viewId}`, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
        }
      });
      const data = response.data.payload;
      setEmail(data.email);
      setName(data.name);
      setCompany(data.company);
      setSent(data.createdAt);
      setMessage(data.message);
    }
    getMessageData();
  }, [viewId]);

  return (
  <Modal
  opened={opened}
  onClose={() => setOpened(false)}
  title={`From: ${name}`}
  size="lg"
  >
    <div>
    <div style={{ marginBottom: '10px' }}>Email: {email}</div>
    <div style={{ marginBottom: '10px' }}>Company: {company}</div>
    <div style={{ marginBottom: '20px' }}>Sent on: {sent}</div>
    {message}
    </div>
  </Modal>
  )
}

export default ViewMessage;