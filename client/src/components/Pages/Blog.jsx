import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ContainerSmall from '../styles/ContainerSmall';
import SectionInner from '../styles/SectionInner';

function ProjectsCollection() {
  return (
  <>
  <Helmet>
    <title>Blog | Austin Flatt</title>
    <meta name='description' content='Archive of my blog.' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
  </Helmet>
  <ContainerSmall>
    <SectionInner>
      <br />
      <h2>Blog</h2>
      <p>Blog coming soon!</p>
    </SectionInner>
  </ContainerSmall>
  </>
  )
}

export default ProjectsCollection;