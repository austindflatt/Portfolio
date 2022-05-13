import React from 'react';
import { Helmet } from "react-helmet";
import SkillsList from './SkillsList';

const Skills = () => {
  return (
	<>
    <Helmet>
    <title>Manage Skills | Austin Flatt</title>
    <meta name='description' content='Manage Skills' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering job, louisville coder, hire software engineer, hire louisville software developer' />
	</Helmet>
	<SkillsList />
	</>
  )
}

export default Skills;