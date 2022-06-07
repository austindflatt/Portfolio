import React, { useContext, useEffect } from 'react'
import { Text, Paper, Group } from '@mantine/core';
import { ProjectContext } from '../../../context/projectContext/ProjectContext';
import { getProjects } from '../../../context/projectContext/apiCalls';
import { Folder } from 'tabler-icons-react';

const Projects = () => {
  const { projects, dispatch } = useContext(ProjectContext);
  
  useEffect(() => {
    getProjects(dispatch);
  }, [dispatch]);
  
  return (
  <>
  <Paper withBorder radius="sm" p="lg">
    <Group position="apart">
      <Text color="dimmed" size="sm" transform="uppercase" weight={700}>
        Projects
      </Text>
      <Folder size={22} />
    </Group>
    
    <Group align="flex-end" spacing="xs" mt={25}>
      <Text style={{ fontSize: 24, fontWeight: 700, lineHeight: 1 }}>{projects.length}</Text>
    </Group>
  </Paper>
  </>
  )
}

export default Projects;