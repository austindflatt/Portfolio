import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tooltip, Button, TextInput, Anchor, Chip, Chips, SimpleGrid } from '@mantine/core';
import ContainerSmall from '../components/styles/ContainerSmall';
import SectionInner from '../components/styles/SectionInner';
import { ProjectHome, ProjectHomeCard, ProjectImage, ProjectHomeLinks, ProjectWrapper, ProjectTitle, ImageBox } from '../components/styles/Projects';
import { Search } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import projects from '../components/data/projects.json'

function ProjectsCollection() {
  const [search, setSearch] = useState('');
  const [showAmount, setShowAmount] = useState(6);

  const slice = projects.slice(0, showAmount);

  const viewMore = () => {
    setShowAmount(showAmount + showAmount);
  }

  const transition = 'all 250ms ease';
  
  return (
  <>
  <Helmet>
    <title>All Projects | Austin Flatt</title>
    <meta name='description' content='Archive of all my projects.' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
  </Helmet>

  <ContainerSmall>
    <SectionInner>
      <br />
      <h2>My Projects</h2>
      {/* <SimpleGrid 
      cols={4} 
      spacing="sm"
      breakpoints={[
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 2, spacing: 'sm' },
      ]}
      >
      {projects.map((project) => (
        <Chips variant="filled" key={null} radius="md" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
          <Chip style={{ marginRight: '10px', marginBottom: '10px' }}>{project.techUsed}</Chip>
        </Chips>
      ))}
      </SimpleGrid> */}
      <ProjectHome>
        {slice.filter((project) => {
          if(search === ''){
            return true
          } else if(project.title.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          return false
        })
        .map((project, idx) => (
        
        <ProjectHomeCard key={idx}>
          <ImageBox>
          <Anchor onClick={null} style={{ textDecoration: 'none' }}>
            <ProjectImage src={project.image} loading="lazy" alt={project.title} />
          </Anchor>
          </ImageBox>
        </ProjectHomeCard>
        ))}
        </ProjectHome>
        {/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Link to='projects'>
            <Button color="dark" radius="md" size="md" sx={{":hover": {transition: transition}}} onClick={() => viewMore()}>Load More</Button>
          </Link>
        </div> */}
    </SectionInner>
  </ContainerSmall>
  </>
  )
}

export default ProjectsCollection;