import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Header, HeaderInner, LinksUnordered } from '../styles/Header';
import ContainerSmall from '../styles/ContainerSmall';
import {Box} from "@mui/material";
import Toggler from "./Toggler";

function HeaderNav({darkMode, handleClick}) {
  const transition = 'all 250ms ease'

  return (
  <Header>
    <ContainerSmall>
      <HeaderInner>
        <Link to="/" className="nav-logo">aflatt.</Link>
        <LinksUnordered>
          <NavLink exact to="projects" className="links" activeClassName="links-active">Projects</NavLink>
          <NavLink exact to="about" className="links" activeClassName="links-active">About</NavLink>
          <NavLink exact to="uses" className="links" activeClassName="links-active">Uses</NavLink>
          <li>
            <Toggler darkMode={darkMode} handleClick={handleClick}/>
          </li>
        </LinksUnordered>
      </HeaderInner>
    </ContainerSmall>
  </Header>
  )
}

export default HeaderNav;