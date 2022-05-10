import React, { useState, useRef } from "react";
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

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const passwordRef = useRef();

  const handleFinish = async (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
    setUsername(usernameRef.current.value);
    setCompany(companyRef.current.value);
    setPassword(passwordRef.current.value);
    try {
      await axios.post('https://secure-savannah-93086.herokuapp.com/api/auth/register', { email, firstName, lastName, username, company, password });
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
          placeholder="Enter your first name"
          label="First Name"
          id="firstName"
          size="lg"
          icon={<User size={14} />}
          ref={firstNameRef}
          required
          />
          <TextInput
          placeholder="Enter your last name"
          label="Last Name"
          id="lastName"
          size="lg"
          icon={<User size={14} />}
          ref={lastNameRef}
          required
          />
          <TextInput
          placeholder="Enter a username"
          label="Username"
          id="username"
          size="lg"
          icon={<User size={14} />}
          ref={usernameRef}
          required
          />
          <TextInput
          placeholder="Enter your email"
          label="Email"
          id="email"
          size="lg"
          icon={<At size={14} />}
          ref={emailRef}
          required
          />
          <TextInput
          placeholder="Enter company/business name"
          label="Company"
          id="company"
          size="lg"
          icon={<Building size={14} />}
          ref={companyRef}
          required
          />
          <TextInput
          placeholder="Create a password"
          label="Password"
          id="password"
          size="lg"
          icon={<Eye size={14} />}
          type="password"
          ref={passwordRef}
          required
          />
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <Button type="Submit" variant="light" size="md" onClick={handleFinish}>Register</Button>
          </div>

        </form>
      </ContainerSmall>
    </SectionInner>
  </>
  )
}

export default Register;