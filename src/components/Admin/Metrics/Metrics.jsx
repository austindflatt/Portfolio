import React from 'react'
import Messages from './Messages'
import Projects from './Projects'
import Skills from './Skills'
import Videos from './Videos'
import { SimpleGrid } from '@mantine/core';

const Metrics = () => {
  return (
	  <>
	  <SimpleGrid
	  cols={2}
	  breakpoints={[
      { maxWidth: 'md', cols: 2 },
      { maxWidth: 'xs', cols: 1 },
    ]}
    style={{ marginBottom: '20px' }}
    >
      <Messages />
      <Projects />
      <Videos />
      <Skills />
	  </SimpleGrid>
	  </>
  )
}

export default Metrics;