import React from 'react';
import { data } from '../../data/data';
import skills from './skills.json';
import styled from 'styled-components';
import SectionInner from '../styles/SectionInner'


export const Tech = styled.ul`
    font-size: 25px;
	font-weight: 500;
	list-style: none;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0px;
	padding: 48px;
`;

export const TechList = styled.li`
    color: #262626;
    display: inline-block;
    flex-basis: 22%;
    margin: 10px;
    padding: 10px;
    font-size: 3rem;
    line-height: 42px;
    letter-spacing: 0.01em;
    white-space: nowrap;

    @media (max-width:639px) {
        display: inline-block;
        flex-basis: 40%;
        margin: 10px;
        padding: 10px;
        font-size: 3rem;
        line-height: 42px;
        letter-spacing: 0.01em;
        white-space: nowrap;
        }
`;

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;
    text-align: center;

    @media (min-width: 481px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const Memoji = styled.div`
content:url(images/memoji.webp);
width: 200px;
`;

export const MemojiSize = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;



function AboutMe() {

    return (
        <>
        <Container>
        <SectionInner>
        <h2>About Me</h2>
        <p>{data.aboutMe}</p>
        <MemojiSize>
        <Memoji />
        </MemojiSize>
        <br /><br />
        <h2>My Toolkit</h2>
        <Tech>
        {skills.map((skill) => (
        <TechList>
            <i key={skill.id} className={skill.icon}></i>
            <h3 className='skills h3'>{skill.name}</h3>
        </TechList>
        ))}
        </Tech>
        </SectionInner>
        </Container>
        </>
    )
}

export default AboutMe;