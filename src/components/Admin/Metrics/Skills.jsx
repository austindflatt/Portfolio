import React, { useContext, useEffect } from 'react'
import { Text, Paper, Group } from '@mantine/core';
import { SkillContext } from '../../../context/skillContext/SkillContext';
import { getSkills } from '../../../context/skillContext/apiCalls';
import { Hammer } from 'tabler-icons-react';

const Skills = () => {
  const { skills, dispatch } = useContext(SkillContext);
  
  useEffect(() => {
    getSkills(dispatch);
  }, [dispatch]);
  
  return (
  <>
  <Paper withBorder radius="sm" p="lg">
    <Group position="apart">
      <Text color="dimmed" size="sm" transform="uppercase" weight={700}>
        Skills
      </Text>
      <Hammer size={22} />
    </Group>
    
    <Group align="flex-end" spacing="xs" mt={25}>
      <Text style={{ fontSize: 24, fontWeight: 700, lineHeight: 1 }}>{skills.length}</Text>
    </Group>
  </Paper>
  </>
  )
}

export default Skills;