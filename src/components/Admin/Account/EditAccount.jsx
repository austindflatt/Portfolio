import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextInput, Switch, Button, Modal } from '@mantine/core';

const EditAccount = ({ editId, opened, setOpened }) => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [admin, setAdmin] = useState(false);
  const userEmail = JSON.parse(localStorage.getItem('user')).email;
  const userPassword = JSON.parse(localStorage.getItem('user')).password;

  useEffect(() => {
    const getEditData = async () => {
      const response = await axios.get(`https://secure-savannah-93086.herokuapp.com/api/users/find/${editId}`, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
        }
      });
      const data = response.data.info;
      setUsername(data.username);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(userEmail);
      setCompany(data.company);
      setAdmin(data.isAdmin);
    }
    getEditData();
  }, [editId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    // const updatedData = {
    //   id: editId,
    // }
  }

  return (
  <>
    <Modal
    opened={opened}
    onClose={() => setOpened(false)}
    title="Edit Your Account"
    size="lg"
    >
    <TextInput
    variant="filled"
    label="First Name"
    id="firstName"
    size="md"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="Last Name"
    id="lastName"
    size="md"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="Username"
    id="username"
    size="md"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="Email"
    id="email"
    size="md"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="Company"
    id="company"
    size="md"
    value={company}
    onChange={(e) => setCompany(e.target.value)}
    />
    <Switch 
    label="Admin Control" 
    size="md" 
    id="isAdmin" 
    checked={admin}
    onChange={() => setAdmin(!admin)} 
    style={{ marginTop: '10px' }}
    />

    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="sm" color='orange' onClick={handleUpdate}>Update Account</Button>
    </div>
    </Modal>
  </>
  )
}

export default EditAccount;