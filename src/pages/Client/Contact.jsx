import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { Helmet } from "react-helmet";
import Container from '../../components/styles/Container'
import ContainerSmall from '../../components/styles/ContainerSmall';
import SectionInner from '../../components/styles/SectionInner';
import { TextInput, Textarea, Button } from '@mantine/core';
import { At, Building, User } from 'tabler-icons-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();
  
  const nameRef = useRef();
  const companyRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  
  const handleFinish = async (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    setName(nameRef.current.value);
    setCompany(companyRef.current.value);
    setMessage(messageRef.current.value);
    try {
      await axios.post('https://secure-savannah-93086.herokuapp.com/api/messages/send', { email, name, company, message });
      history.push('/');
    } catch (error) { 

    }
  }
  
  return (
  <>
  <Helmet>
    <title>Contact | Austin Flatt</title>
    <meta name='description' content='Get in touch with me' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering job, louisville coder, hire software engineer, hire louisville software developer' />
  </Helmet>
  
  <Container />
  <SectionInner>
    <br />
    <ContainerSmall>
      <h2>Contact Me</h2>
        <p>
          Don't hesitate to reach out if you’re in need of a developer. 
          Whether that means you need a website, web app, want to collaborate on a project, or if you’re looking to fill a full-time position. 
          If you have a question or just want to say hello, just fill out the form below and I will get back to you!
        </p>
        <TextInput
        variant="filled"
        placeholder="Your name"
        label="Name"
        id="name"
        size="md"
        ref={nameRef}
        icon={<User size={14} />}
        required
        />
        <TextInput
        variant="filled"
        placeholder="Company"
        label="Organization/Company"
        id="company"
        size="md"
        ref={companyRef}
        icon={<Building size={14} />}
        required
        />
        <TextInput
        variant="filled"
        placeholder="Your email"
        label="Email"
        id="email"
        size="md"
        ref={emailRef}
        icon={<At size={14} />}
        required
        />
        <Textarea
        variant="filled"
        label="Message"
        id="message"
        size="md"
        minRows={6}
        ref={messageRef}
        required
        />
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Button type="Submit" variant="light" size="sm" onClick={handleFinish}>Send Message</Button>
        </div>
    </ContainerSmall>
  </SectionInner>
  </>
  )
}

export default Contact;