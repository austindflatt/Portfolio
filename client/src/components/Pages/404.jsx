import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from '../styles/Container';
import ContainerSmall from '../styles/ContainerSmall';
import SectionInner from '../styles/SectionInner';
import { Error, LostSize, Lost, NotFoundHeading, NotFoundSubHeading } from '../styles/404';
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
        <NotFoundSubHeading>Sorry, this page doesn't exist or you spelled something wrong. I'm guessing you spelled something wrong. Double check that URL :)</NotFoundSubHeading>
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