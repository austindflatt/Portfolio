import React from 'react';
import { Helmet } from "react-helmet";
import ContainerSmall from '../components/styles/ContainerSmall';
import SectionInner from '../components/styles/SectionInner';

const Uses = () => {

  return (
  <>
  <Helmet>
    <title>Uses | Austin Flatt</title>
    <meta name='description' content='Page Not Found' />
    <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
  </Helmet>
  <ContainerSmall />
  <SectionInner>
    <br />
    <ContainerSmall>
      <h2>Uses</h2>
      <p>
      This is my list of software tools that I use frequently. 
      I do my best at updating it whenever a change occurs.
      </p>
      </ContainerSmall>
  </SectionInner>
  </>
  )
}

export default Uses;