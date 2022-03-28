import React from "react";
import { Helmet } from "react-helmet";
import Container from '../styles/Container'
import ContainerSmall from '../styles/ContainerSmall';
import SectionInner from '../styles/SectionInner';
import { TextInput, Button } from '@mantine/core';
import { At, Eye } from 'tabler-icons-react';

const Login = () => {
  return (
  <>
  <Helmet>
    <title>Login | Austin Flatt</title>
    <meta name='description' content='Login to your account' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering job, louisville coder, hire software engineer, hire louisville software developer' />
  </Helmet>

  <Container />
    <SectionInner>
      <br />
      <ContainerSmall>
        <h2>Login to your account</h2>
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
          placeholder="Enter your password"
          label="Password"
          id="password"
          size="lg"
          icon={<Eye size={14} />}
          type="password"
          required
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <Button type="Submit" variant="light" size="md">Login</Button>
          </div>

        </form>
      </ContainerSmall>
    </SectionInner>
  </>
  )
}

export default Login;