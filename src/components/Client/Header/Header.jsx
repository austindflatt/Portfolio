import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Header, HeaderInner, LinksUnordered } from '../../styles/Header';
import ContainerSmall from '../../styles/ContainerSmall';

function HeaderNav() {
  return (
  <Header>
    <ContainerSmall>
      <HeaderInner>
        <Link to="/" className="nav-logo">aflatt.</Link>
        <LinksUnordered>
        <NavLink exact to="projects" className="links" activeClassName="links-active">Projects</NavLink>
        <NavLink exact to="about" className="links" activeClassName="links-active">About</NavLink>
        <NavLink exact to="contact" className="links" activeClassName="links-active">Contact</NavLink>
        </LinksUnordered>
      </HeaderInner>
    </ContainerSmall>
  </Header>
  )
}

export default HeaderNav;