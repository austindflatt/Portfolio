import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { TextInput, Textarea, Button } from '@mantine/core';
import { BrandGithub, BrandLinkedin, BrandTwitch, BrandTwitter, BrandYoutube } from 'tabler-icons-react';
import { AboutContext } from '../../../context/aboutContext/AboutContext';
import { updateAbout } from '../../../context/aboutContext/apiCalls';

const AboutData = () => {
  const [headshot, setHeadshot] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [youtube, setYoutube] = useState('');
  const [twitch, setTwitch] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [aboutMeShort, setAboutMeShort] = useState('');
  const { dispatch } = useContext(AboutContext);
  const editId = '624e72b4c2ce0e16eca4f860';

  useEffect(() => {
    const getEditData = async () => {
      const response = await axios.get(`https://secure-savannah-93086.herokuapp.com/api/about/find/${editId}`);
      const data = response.data.payload;
      setHeadshot(data.headshot);
      setGithub(data.githubUrl);
      setLinkedin(data.linkedinUrl);
      setTwitter(data.twitterUrl);
      setYoutube(data.youtubeUrl);
      setTwitch(data.twitchUrl);
      setAboutMe(data.aboutMe);
      setAboutMeShort(data.aboutMeShort);
    }
    getEditData();
  }, [editId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = {
      id: editId,
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
    <title>Manage App Info | Austin Flatt</title>
    <meta name='description' content='Get in touch with me' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering job, louisville coder, hire software engineer, hire louisville software developer' />
  </Helmet>
    <TextInput
    variant="filled"
    label="Headshot"
    id="headshot"
    size="md"
    value={headshot}
    onChange={(e) => setHeadshot(e.target.value)}
    />
    {/* <Text size="sm" weight={500}>Upload Your Headshot</Text>
    <input 
    id="headshot" 
    type="file"
    onChange={(e) => setHeadshot(e.target.files[0])}
    style={{ marginBottom: '10px' }}
    /> */}
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" variant="light" size="sm" color="orange" onClick={handleUpdate}>Update Details</Button>
    </div>
  </>
  )
}

export default AboutData;