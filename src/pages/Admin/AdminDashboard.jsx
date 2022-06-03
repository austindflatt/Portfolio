import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Container from "../../components/styles/Container";
import ContainerSmall from "../../components/styles/ContainerSmall";
import SectionInner from "../../components/styles/SectionInner";
import { Tabs, Title, Button } from '@mantine/core';

import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";

import Metrics from '../../components/Admin/Metrics/Metrics';
import AboutData from '../../components/Admin/AboutData/AboutData';
import Messages from '../../components/Admin/Messages/Messages';
import Projects from '../../components/Admin/Projects/Projects';
// import Videos from '../../components/Admin/Videos/Videos';
import Skills from '../../components/Admin/Skills/Skills';
// import Users from '../../components/Admin/Users/Users';

const Admin = () => {
  const { isFetching, dispatch } = useContext(AuthContext);
  const username = JSON.parse(localStorage.getItem('user')).firstName;
  const admin = JSON.parse(localStorage.getItem('user')).isAdmin;
  return (
  <>
  <Helmet>
    <title>Admin Dashboard | Austin Flatt</title>
  </Helmet>

  <Container />
    <SectionInner>
      <br />
      <ContainerSmall>
        { admin ?
        <>
        <h2>Admin Dashboard</h2>
        <p>Welcome {username}</p>
        <Button type="Submit" variant="light" color="orange" size="sm" style={{ marginBottom: '20px', marginRight: '10px' }}>Edit Account</Button>
        <Button type="Submit" variant="light" size="sm" onClick={() => dispatch(logout())} disabled={isFetching} style={{ marginBottom: '20px' }}>Logout</Button>
        <Metrics />
        <Tabs variant="pills">
          <Tabs.Tab label="Details"><AboutData /></Tabs.Tab>
          <Tabs.Tab label="Messages"><Messages /></Tabs.Tab>
          <Tabs.Tab label="Projects"><Projects /></Tabs.Tab>
          {/* <Tabs.Tab label="Videos"><Videos /></Tabs.Tab> */}
          <Tabs.Tab label="Skills"><Skills /></Tabs.Tab>
          {/* <Tabs.Tab label="Users"><Users /></Tabs.Tab> */}
        </Tabs>
        </> : <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}><Title order={3}>You do not have permission to access this</Title></div>
        }
      </ContainerSmall>
    </SectionInner>
  </>
  )
}

export default Admin;