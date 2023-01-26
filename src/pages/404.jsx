import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from '../components/styles/Container';
import ContainerSmall from '../components/styles/ContainerSmall';
import SectionInner from '../components/styles/SectionInner';
import { Error, LostSize, Lost, NotFoundHeading, NotFoundSubHeading } from '../components/styles/404';
import { Button } from '@mantine/core';

const PageNotFound = () => {
  const transition = 'all 250ms ease';
  return (
  <>
  <Helmet>
    <title>Page Not Found | Austin Flatt</title>
    <meta name='description' content='Page Not Found' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
  </Helmet>
  <Container />
  <SectionInner>
    <ContainerSmall>
      <Error>
        <LostSize><Lost loading="lazy" /></LostSize>
        <NotFoundHeading>404</NotFoundHeading>
        <NotFoundSubHeading>Sorry, this page doesn't exist or you spelled something wrong.</NotFoundSubHeading>
        <Link to="/">
        <Button 
        radius="md" 
        size="md" 
        styles={(theme) => ({
          root: {
            backgroundColor: 'rgba(18,18,18)',
            border: '1px solid #2b3031',
            borderRadius: '5px',
            color: '#cbc8d0',
            fontFamily: 'Readex Pro',
            fontWeight: '300',
            paddingLeft: 20,
            paddingRight: 20,
  
            '&:hover': {
              backgroundColor: 'rgba(18,18,18)',
              transition: transition
            },
          },
  
          leftIcon: {
            marginRight: 15,
          },
        })}
        >
          Go Home
        </Button>
        </Link>
      </Error>
    </ContainerSmall>
  </SectionInner>
  </>
  )
}

export default PageNotFound;