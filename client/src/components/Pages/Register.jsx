import React from "react";
import { Helmet } from "react-helmet";
import Container from '../styles/Container'
import ContainerSmall from '../styles/ContainerSmall';
import SectionInner from '../styles/SectionInner';
import { TextInput, Button } from '@mantine/core';
import { At, User, Eye, Building } from 'tabler-icons-react';

const Register = () => {
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
          placeholder="Enter your email"
          label="Email"
          id="email"
          size="lg"
          icon={<At size={14} />}
          required
          />
		  <TextInput
          placeholder="Enter your name"
          label="Name"
          id="name"
          size="lg"
          icon={<User size={14} />}
          required
          />
		  <TextInput
          placeholder="Enter company/business name"
          label="Company"
          id="company"
          size="lg"
          icon={<Building size={14} />}
          required
          />
          <TextInput
          placeholder="Create a password"
          label="Password"
          id="password"
          size="lg"
          icon={<Eye size={14} />}
          type="password"
          required
          />
		  <TextInput
          placeholder="Confirm Password"
          label="Confirm Password"
          id="confirmPassword"
          size="lg"
          icon={<Eye size={14} />}
          type="password"
          required
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <Button type="Submit" variant="light" size="md">Register</Button>
          </div>

        </form>
      </ContainerSmall>
    </SectionInner>
  </>
  )
}

export default Register;