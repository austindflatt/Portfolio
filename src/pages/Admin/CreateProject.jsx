import React from 'react';
import AddProject from '../../components/Admin/Projects/AddProject';
import { Helmet } from "react-helmet";
import Container from "../../components/styles/Container";
import ContainerSmall from "../../components/styles/ContainerSmall";
import SectionInner from "../../components/styles/SectionInner";

const CreateProject = () => {
  return (
  <>
  <Helmet>
    <title>Add Project | Austin Flatt</title>
  </Helmet>

  <Container />
    <SectionInner>
      <br />
      <ContainerSmall>
        <h2>Add New Project</h2>
        <AddProject />
      </ContainerSmall>
    </SectionInner>
  </>
  )
}

export default CreateProject;