import React from 'react';
import { Helmet } from "react-helmet";
import ProjectsList from './ProjectsList';

const Projects = () => {
  return (
    <>
    <Helmet>
      <title>Manage Projects | Austin Flatt</title>
      <meta name='description' content='Manage Projects' />
      <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering job, louisville coder, hire software engineer, hire louisville software developer' />
    </Helmet>
    <ProjectsList />
    </>
  )
}

export default Projects;