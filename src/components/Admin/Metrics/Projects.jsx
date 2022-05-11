import React, { useContext, useEffect } from 'react'
import { Text, Paper, Group } from '@mantine/core';
import { ProjectContext } from '../../../context/projectContext/ProjectContext';
import { getProjects } from '../../../context/projectContext/apiCalls';

const Projects = () => {
  const { projects, dispatch } = useContext(ProjectContext);
  
  useEffect(() => {
    getProjects(dispatch);
  }, [dispatch]);
  
  return (
  <>
  <Paper withBorder radius="sm" p="lg" key={null}>
    <Group>
      <div>
        <Text color="dimmed" size="sm" transform="uppercase" weight={700}>
          Projects
        </Text>
        <Text weight={700} size="xl">{projects.length}</Text>
      </div>
    </Group>
  </Paper>
  </>
  )
}

export default Projects;