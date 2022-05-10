import React, { useContext, useEffect } from 'react'
import { Text, Paper, Group } from '@mantine/core';
import { SkillContext } from '../../../context/skillContext/SkillContext';
import { getSkills } from '../../../context/skillContext/apiCalls';

const Skills = () => {
  const { skills, dispatch } = useContext(SkillContext);
  
  useEffect(() => {
    getSkills(dispatch);
  }, [dispatch]);
  
  return (
  <>
  <Paper withBorder radius="md" p="md" key={null}>
    <Group>
      <div>
        <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
          Skills
        </Text>
        <Text weight={700} size="xl">{skills.length}</Text>
      </div>
    </Group>
  </Paper>
  </>
  )
}

export default Skills;