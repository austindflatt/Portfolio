import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from '../../context/authContext/AuthContext';
import Container from '../../components/styles/Container'
import ContainerSmall from '../../components/styles/ContainerSmall';
import SectionInner from '../../components/styles/SectionInner';
import { TextInput, Button } from '@mantine/core';
import { At, Eye } from 'tabler-icons-react';
import { login } from "../../context/authContext/apiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch)
  }
  
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
          onChange={(e) => setEmail(e.target.value)}
          size="lg"
          icon={<At size={14} />}
          required
          />
          <TextInput
          placeholder="Enter your password"
          label="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          size="lg"
          icon={<Eye size={14} />}
          type="password"
          required
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <Button type="Submit" variant="light" size="md" onClick={handleLogin} disabled={isFetching}>Login</Button>
          </div>
        </form>
      </ContainerSmall>
    </SectionInner>
  </>
  )
}

export default Login;