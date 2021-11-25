import React from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components';
import Container from '../styles/Container'

export const Header = styled.header`
    width: 100%;
    height: 80px;
    background-color: hsla(0,0%,100%,0.8);
    border-bottom: 1px solid #eaeaea;
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    z-index: 3;
    position: fixed;
    top: 0px;
`;

export const HeaderInner = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLogo = styled.a`
    line-height: 1;
    font-weight: 500;
    font-size: 25px;
    text-decoration: none;
    color: var(--main);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const LinksUnordered = styled.ul`
    margin: 0;
	padding: 0;
	list-style: none;
	font-size: 1.25rem;
	line-height: 1;
	text-decoration: none;
	color: rgb(11, 87, 114);

    display: list-item;
	text-align: -webkit-match-parent;

    color: var(--main-text);
	font-family: Fira Sans,sans-serif;
	font-size: 17px;
	margin: 10px;
	padding: 0;
	list-style: none;
	display: inherit;
`;

export const Links = styled.a`
    color: var(--main-text);
    font-family: Fira Sans,sans-serif;
    font-size: 17px;
    margin: 10px;
    padding: 0;
    list-style: none;
    display: inherit;
`;



function HeaderNav() {

    return (
        <Header>
        <Container>
        <HeaderInner>
        <Link to="/" className="nav-logo">aflatt.</Link>
        <LinksUnordered>
        <NavLink exact to="projects" className="links" activeClassName="links-active">Projects</NavLink>
        <NavLink exact to="about" className="links" activeClassName="links-active">About</NavLink>
        <NavLink exact to="uses" className="links" activeClassName="links-active">Uses</NavLink>
        <NavLink exact to="contact" className="links" activeClassName="links-active">Contact</NavLink>
        </LinksUnordered>
        </HeaderInner>
        </Container>
        </Header>
    )
}

export default HeaderNav;