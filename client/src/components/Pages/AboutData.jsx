import React from "react";
import axios from 'axios'
import { Helmet } from "react-helmet";
import Container from '../styles/Container'
import ContainerSmall from '../styles/ContainerSmall';
import SectionInner from '../styles/SectionInner';
import { TextInput, Textarea, MultiSelect, Button } from '@mantine/core';
import { At, BrandGithub, BrandLinkedin, BrandTwitch, BrandTwitter, BrandYoutube, Building, Location, User } from 'tabler-icons-react';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

const AboutData = () => {
  return (
  <>
  <Helmet>
    <title>Update Portfolio Details | Austin Flatt</title>
    <meta name='description' content='Get in touch with me' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering job, louisville coder, hire software engineer, hire louisville software developer' />
  </Helmet>

  <Container />
    <SectionInner>
      <br />
      <ContainerSmall>
        <h2>Update Portfolio Details</h2>
        <form>
          <TextInput
          label="Upload a headshot"
          id="name"
          size="lg"
          icon={<User size={24} />}
          required
          />
          <TextInput
          placeholder="GitHub Link"
          label="GitHub Link"
          id="name"
          size="lg"
          icon={<BrandGithub size={24} />}
          required
          />
          <TextInput
          placeholder="LinkedIn Link"
          label="LinkedIn Link"
          id="company"
          size="lg"
          icon={<BrandLinkedin size={24} />}
          required
          />
          <TextInput
          placeholder="Twitter Link"
          label="Twitter Link"
          id="email"
          size="lg"
          icon={<BrandTwitter size={24} />}
          required
          />
          <TextInput
          placeholder="YouTube Link"
          label="YouTube Link"
          id="email"
          size="lg"
          icon={<BrandYoutube size={24} />}
          required
          />
          <TextInput
          placeholder="Twitch Link"
          label="Twitch Link"
          id="email"
          size="lg"
          icon={<BrandTwitch size={24} />}
          required
          />
          <Textarea
          label="About Me Bio"
          id="message"
          size="lg"
          required
          />
          <Textarea
          label="Short Bio"
          id="message"
          size="lg"
          required
          />

          <MultiSelect
          data={data}
          label="Technologies that you are proficient with"
          placeholder="Pick all that you like"
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <Button type="Submit" variant="light" size="md">Update Portfolio Details</Button>
          </div>

        </form>
      </ContainerSmall>
    </SectionInner>
  </>
  )
}

export default AboutData;