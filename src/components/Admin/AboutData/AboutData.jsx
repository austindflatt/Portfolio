import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { TextInput, Textarea, Button } from '@mantine/core';
import { BrandGithub, BrandLinkedin, BrandTwitch, BrandTwitter, BrandYoutube } from 'tabler-icons-react';
import { AboutContext } from '../../../context/aboutContext/AboutContext';
import { getAbout } from '../../../context/aboutContext/apiCalls';

const AboutData = () => {
  const [setHeadshot] = useState(null);
  const { about, dispatch } = useContext(AboutContext);

  useEffect(() => {
    getAbout(dispatch);
  }, [dispatch]);

  return (
  <>
  <Helmet>
    <title>Update Portfolio Details | Austin Flatt</title>
    <meta name='description' content='Get in touch with me' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering job, louisville coder, hire software engineer, hire louisville software developer' />
  </Helmet>
  <form>
    <div>
      <label>Upload Headshot</label>
      <br />
      <input type='file' onChange={e=>setHeadshot(e.target.files[0])}></input>
    </div>
    <TextInput
    placeholder="GitHub Link"
    label="GitHub Link"
    id="name"
    size="md"
    defaultValue='hello'
    icon={<BrandGithub size={24} />}
    required
    />
    <TextInput
    placeholder="LinkedIn Link"
    label="LinkedIn Link"
    id="company"
    size="md"
    icon={<BrandLinkedin size={24} />}
    required
    />
    <TextInput
    placeholder="Twitter Link"
    label="Twitter Link"
    id="email"
    size="md"
    icon={<BrandTwitter size={24} />}
    required
    />
    <TextInput
    placeholder="YouTube Link"
    label="YouTube Link"
    id="email"
    size="md"
    icon={<BrandYoutube size={24} />}
    required
    />
    <TextInput
    placeholder="Twitch Link"
    label="Twitch Link"
    id="email"
    size="md"
    icon={<BrandTwitch size={24} />}
    required
    />
    <Textarea
    label="About Me Bio"
    id="message"
    size="md"
    defaultValue={about}
    required
    />
    <Textarea
    label="Short Bio"
    id="message"
    size="md"
    required
    />
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="sm" color="orange">Update Details</Button>
    </div>
  </form>
  </>
  )
}

export default AboutData;