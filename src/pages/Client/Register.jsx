import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Helmet } from "react-helmet";
import Container from '../../components/styles/Container'
import ContainerSmall from '../../components/styles/ContainerSmall';
import SectionInner from '../../components/styles/SectionInner';
import { TextInput, Button } from '@mantine/core';
import { At, User, Eye, Building } from 'tabler-icons-react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleFinish = async (e) => {
    e.preventDefault();
    const newBody = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      username: username,
      company: company,
      password: password
    }
    try {
      await axios.post('http://portfolioserver-env.eba-mrpmux5a.us-east-2.elasticbeanstalk.com/api/auth/register', newBody);
      history.push('/login');
    } catch (error) {
      
    }
  }

  return (
  <>
  <Helmet>
    <title>Register | Austin Flatt</title>
    <meta name='description' content='Register an account' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering job, louisville coder, hire software engineer, hire louisville software developer' />
  </Helmet>

  <Container />
    <SectionInner>
      <br />
      <ContainerSmall>
        <h2>Register</h2>
        <form>
          <TextInput
          variant="filled"
          placeholder="Enter your first name"
          label="First Name"
          id="firstName"
          size="md"
          icon={<User size={14} />}
          onChange={(e) => setFirstName(e.target.value)}
          required
          />
          <TextInput
          variant="filled"
          placeholder="Enter your last name"
          label="Last Name"
          id="lastName"
          size="md"
          icon={<User size={14} />}
          onChange={(e) => setLastName(e.target.value)}
          required
          />
          <TextInput
          variant="filled"
          placeholder="Enter a username"
          label="Username"
          id="username"
          size="md"
          icon={<User size={14} />}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
          <TextInput
          variant="filled"
          placeholder="Enter your email"
          label="Email"
          id="email"
          size="md"
          icon={<At size={14} />}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
          <TextInput
          variant="filled"
          placeholder="Enter company/business name"
          label="Company"
          id="company"
          size="md"
          icon={<Building size={14} />}
          onChange={(e) => setCompany(e.target.value)}
          required
          />
          <TextInput
          variant="filled"
          placeholder="Create a password"
          label="Password"
          id="password"
          size="md"
          icon={<Eye size={14} />}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <Button type="Submit" variant="light" size="sm" onClick={handleFinish}>Register</Button>
          </div>

        </form>
      </ContainerSmall>
    </SectionInner>
  </>
  )
}

export default Register;