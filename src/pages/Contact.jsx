import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { Helmet } from "react-helmet";
import Container from '../components/styles/Container'
import ContainerSmall from '../components/styles/ContainerSmall';
import SectionInner from '../components/styles/SectionInner';
import { TextInput, Textarea, Button } from '@mantine/core';
import { At, Building, User } from 'tabler-icons-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();
  
  const handleFinish = async (e) => {
    e.preventDefault();
    const newBody = {
      email: email,
      name: name,
      company: company,
      message: message
    }
    try {
      await axios.post('http://portfolioserver-env.eba-mrpmux5a.us-east-2.elasticbeanstalk.com/api/messages/send', newBody);
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
          Whether that means you need a website, web app, or if you’re looking to fill a full-time position.
        </p>
        <TextInput
        variant="filled"
        placeholder="Your name"
        label="Name"
        id="name"
        size="md"
        onChange={(e) => setName(e.target.value)}
        icon={<User size={14} />}
        required
        />
        <TextInput
        variant="filled"
        placeholder="Company"
        label="Organization/Company"
        id="company"
        size="md"
        onChange={(e) => setCompany(e.target.value)}
        icon={<Building size={14} />}
        required
        />
        <TextInput
        variant="filled"
        placeholder="Your email"
        label="Email"
        id="email"
        size="md"
        onChange={(e) => setEmail(e.target.value)}
        icon={<At size={14} />}
        required
        />
        <Textarea
        variant="filled"
        label="Message"
        id="message"
        size="md"
        minRows={6}
        onChange={(e) => setMessage(e.target.value)}
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