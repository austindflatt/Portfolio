import React from 'react';
import skills from '../data/skills.json';
import SectionInner from '../styles/SectionInner';
import ContainerSmall from '../styles/ContainerSmall';
import { MemojiSize, Memoji, Tech, TechList } from '../styles/AboutMe'

function AboutMe() {
  return (
  <>
  <ContainerSmall>
    <SectionInner style={{ textAlign: 'center' }}>
      <h2>About Me</h2>
      <p>
        I'm a Software Engineer with a passion for everything front-end. I love building and creating, whether those things are web applications, or designing in Photoshop. 
        I'm a problem solver and I just love watching my thoughts come to life on screen. Ever since I can remember, I've always had an interest and passion for tech. 
        I specialize in front-end development and make it my mission to create accessible and user-friendly applications and websites.
      </p>
      <MemojiSize>
        <Memoji />
      </MemojiSize>
      <br /><br />
      <h2>My Toolkit</h2>
      <Tech>
        {skills.map((skill) => (
        <TechList>
          <i className={skill.icon}></i>
          <h3 key={skill.id} className='skills h3'>{skill.name}</h3>
        </TechList>
        ))}
      </Tech>
    </SectionInner>
  </ContainerSmall>
  </>
  )
}

export default AboutMe;