import React from "react";
import axios from 'axios'
import { Helmet } from "react-helmet";
import Container from '../../styles/Container'
import ContainerSmall from '../../styles/ContainerSmall'
import SectionInner from '../../styles/SectionInner'
import styled from 'styled-components';

const Label = styled.div`
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const company = document.getElementById('company').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    axios({
      method: 'POST',
      url: 'https://austinflatt-contact-form.herokuapp.com/send',
      data: {
        name: name,
        company: company,
        email: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === 'success') {
        window.alert('Success! ✅')
        window.location = 'contact';
      } else if (response.data.msg === 'fail') {
        window.alert('Error! Please try again')
      }
    })
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
              <h2>Get in touch with me</h2>
              <p>Don't hesitate to reach out if you’re in need of a developer. Whether that means you need a website, web app, want to collaborate on a project, or if you’re looking to fill a full-time position. If you have a question or just want to say hello, just fill out the form below and I will get back to you!</p>
              <br />
              <form onSubmit={handleSubmit}>
                <Label htmlFor="name">Name *</Label>
                <input type="text" id="name" placeholder="Full Name" required />
                <Label htmlFor="name">Organization/Company *</Label>
                <input type="text" id="company" placeholder="Organization or Company" required />
                <Label htmlFor="email">E-mail Address *</Label>
                <input type="email" id="email" placeholder="name@email.com" required />
                <Label htmlFor="message">Message *</Label>
                <textarea id="message" required />
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <button type="Submit" class="button button-primary">Submit</button>
                </div>
              </form>
            </ContainerSmall>
          </SectionInner>
        </>
    )
}

export default Contact;