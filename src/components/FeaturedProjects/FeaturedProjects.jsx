import React from 'react';
import { Link } from "react-router-dom";
import ContainerSmall from '../styles/ContainerSmall';
import { ProjectHome, ProjectHomeCard, ProjectImage, ProjectHomeLinks, ProjectWrapper, ProjectTitle, ImageBox } from '../styles/Projects';
import { Button, Tooltip, Anchor } from '@mantine/core';
import projects from '../data/projects.json'

function ProjectsHome() {
  const transition = 'all 250ms ease'

  return (
  <>
  <ContainerSmall>
    <h2 style={{ textAlign: 'left' }}>Recent projects</h2>
    <ProjectHome>
      {projects
      .filter((project) => {
        if (project.featuredProject === true) {
          return true
        } else {
          return false
        }
      })
      .slice(0, 6)
      .map((project, key) => (
      <ProjectHomeCard key={key}>
        <ImageBox>
        <Anchor onClick={null} style={{ textDecoration: 'none' }}>
          <ProjectImage src={project.image} loading="lazy" alt={project.title} />
        </Anchor>
        </ImageBox>
      </ProjectHomeCard>
      ))}
    </ProjectHome>
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Link to='projects'>
        <Button color="dark" radius="md" size="sm" sx={{":hover": {transition: transition}}}>View All Projects</Button>
      </Link>
    </div>
    <br /><br />
  </ContainerSmall>
  </>
  )
}

export default ProjectsHome;