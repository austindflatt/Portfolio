import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { TextInput, Textarea, Button } from '@mantine/core';
import { BrandGithub, BrandLinkedin, BrandTwitch, BrandTwitter, BrandYoutube } from 'tabler-icons-react';
import { AboutContext } from '../../../context/aboutContext/AboutContext';
import { getAbout, updateAbout } from '../../../context/aboutContext/apiCalls';

const AboutData = () => {
  const [headshot, setHeadshot] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [youtube, setYoutube] = useState('');
  const [twitch, setTwitch] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [aboutMeShort, setAboutMeShort] = useState('');
  const { about, dispatch } = useContext(AboutContext);

  useEffect(() => {
    getAbout(dispatch);
  }, [dispatch]);

  const handleUpdate = () => {
    const updatedData = {
      headshot: headshot,
      githubUrl: github,
      linkedinUrl: linkedin,
      twitterUrl: twitter,
      youtubeUrl: youtube,
      twitchUrl: twitch,
      aboutMe: aboutMe,
      aboutMeShort: aboutMeShort,
    }
    updateAbout(updatedData, dispatch);
  }

  return (
  <>
  <Helmet>
    <title>Update Portfolio Details | Austin Flatt</title>
    <meta name='description' content='Get in touch with me' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering job, louisville coder, hire software engineer, hire louisville software developer' />
  </Helmet>
    {/* <div>
      <label>Upload Headshot</label>
      <br />
      <input type='file' onChange={e=>setHeadshot(e.target.files[0])}></input>
    </div> */}
    <TextInput
    variant="filled"
    label="Headshot"
    id="headshot"
    size="md"
    value={about.headshot}
    onChange={(e) => setHeadshot(e.target.value)}
    />
    <TextInput
    variant="filled"
    label="GitHub Link"
    id="name"
    size="md"
    value={about.githubUrl}
    onChange={(e) => setGithub(e.target.value)}
    icon={<BrandGithub size={24} color="#6e5494" />}
    />
    <TextInput
    variant="filled"
    label="LinkedIn Link"
    id="company"
    size="md"
    value={about.linkedinUrl}
    onChange={(e) => setLinkedin(e.target.value)}
    icon={<BrandLinkedin size={24} color="#0a66c2" />}
    />
    <TextInput
    variant="filled"
    label="Twitter Link"
    id="email"
    size="md"
    value={about.twitterUrl}
    onChange={(e) => setTwitter(e.target.value)}
    icon={<BrandTwitter size={24} color="#1DA1F2" />}
    />
    <TextInput
    variant="filled"
    label="YouTube Link"
    id="email"
    size="md"
    value={about.youtubeUrl}
    onChange={(e) => setYoutube(e.target.value)}
    icon={<BrandYoutube size={24} color="red" />}
    />
    <TextInput
    variant="filled"
    label="Twitch Link"
    id="email"
    size="md"
    value={about.twitchUrl}
    onChange={(e) => setTwitch(e.target.value)}
    icon={<BrandTwitch size={24} color="purple" />}
    />
    <Textarea
    variant="filled"
    label="About Me Bio"
    id="aboutMe"
    size="md"
    minRows={6}
    value={about.aboutMe}
    onChange={(e) => setAboutMe(e.target.value)}
    />
    <Textarea
    variant="filled"
    label="Short Bio"
    id="aboutMeShort"
    size="md"
    minRows={4}
    value={about.aboutMeShort}
    onChange={(e) => setAboutMeShort(e.target.value)}
    />
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="sm" color="orange" onClick={handleUpdate}>Update Details</Button>
    </div>
  </>
  )
}

export default AboutData;