import React from 'react';
import { Helmet } from "react-helmet";
import ContainerSmall from '../components/styles/ContainerSmall';
import SectionInner from '../components/styles/SectionInner';

const Blog = () => {

  return (
  <>
  <Helmet>
    <title>Blog | Austin Flatt</title>
    <meta name='description' content='Page Not Found' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
  </Helmet>
  <ContainerSmall />
  <SectionInner>
    <br />
    <ContainerSmall>
      <h2>Blog</h2>
      <p>
        I've been writing mostly about mobile and web application development and tech in general.
      </p>
      </ContainerSmall>
  </SectionInner>
  </>
  )
}

export default Blog;