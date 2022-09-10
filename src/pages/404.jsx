import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from '../components/styles/Container';
import ContainerSmall from '../components/styles/ContainerSmall';
import SectionInner from '../components/styles/SectionInner';
import { Error, LostSize, Lost, NotFoundHeading, NotFoundSubHeading } from '../components/styles/404';
import { Button } from '@mantine/core';

const PageNotFound = () => {
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
        <Button variant="light" size="md">Go Home</Button>
        </Link>
      </Error>
    </ContainerSmall>
  </SectionInner>
  </>
  )
}

export default PageNotFound;