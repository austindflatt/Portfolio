import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Container from '../../components/styles/Container';
import ContainerSmall from '../../components/styles/ContainerSmall';
import SectionInner from '../../components/styles/SectionInner';
import { SimpleGrid, Chips, Chip } from '@mantine/core';

function AboutPage() {
  const [skills, setSkills] = useState([]);
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const getSkills = async () => {
      try {
        const res = await axios.get(`https://secure-savannah-93086.herokuapp.com/api/skills`)
        setSkills(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    const getAbout = async () => {
      try {
        const res = await axios.get(`https://secure-savannah-93086.herokuapp.com/api/about/find/624e72b4c2ce0e16eca4f860`)
        setAbout(res.data.payload)
      } catch (error) {
        console.log(error)
      }
    }
    getAbout();
    getSkills();
  }, [])

  return (
  <>
  <Helmet>
    <title>About Me | Austin Flatt</title>
    <meta name='description' content='About Me' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
  </Helmet>
  <Container />
  <SectionInner>
    <br />
    <ContainerSmall>
      <h2>About Me</h2>
      {about.aboutMe}
      <br /><br />
      <h2>My Skills</h2>
      <p>I’ve learned and gained a solid understanding of these technologies.</p>
      <SimpleGrid 
      cols={4} 
      spacing="sm"
      breakpoints={[
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 2, spacing: 'sm' },
      ]}
      >
        {skills.map((skill) => (
        <Chips variant="filled" key={skill._id} radius="md" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
          <Chip style={{ marginRight: '10px', marginBottom: '10px' }}>{skill.name}</Chip>
        </Chips>
        ))}
      </SimpleGrid>
    </ContainerSmall>
  </SectionInner>
  </>
  )
}

export default AboutPage;