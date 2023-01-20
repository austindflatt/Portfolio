import React from 'react';
import { Helmet } from "react-helmet";
import Container from '../components/styles/Container';
import ContainerSmall from '../components/styles/ContainerSmall';
import SectionInner from '../components/styles/SectionInner';
import { Error, LostSize, Lost, NotFoundHeading, NotFoundSubHeading } from '../components/styles/404';

const Uses = () => {
  const transition = 'all 250ms ease';
  return (
  <>
  <Helmet>
    <title>Uses | Austin Flatt</title>
    <meta name='description' content='Page Not Found' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
  </Helmet>
  <Container />
  <SectionInner>
    <ContainerSmall>
        <NotFoundSubHeading>Uses coming soon.</NotFoundSubHeading>
    </ContainerSmall>
  </SectionInner>
  </>
  )
}

export default Uses;