import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import ContainerSmall from '../components/styles/ContainerSmall';
import SectionInner from '../components/styles/SectionInner';
import { Image } from '@mantine/core';

const Uses = () => {

  const [uses, setUses] = useState({
		development: [
      {
        name: 'Visual Studio Code',
        description: 'VS Code is a go-to when it comes to software development.',
        image: 'images/uses/vsc.svg',
        link: 'https://code.visualstudio.com/'
      },
      {
        name: 'Warp',
        description: 'A blazing fast terminal',
        image: 'images/uses/warp.png',
        link: 'https://www.warp.dev/'
      },
    ],
    design: [
      {
        name: 'Figma',
        description: 'UI Design.',
        image: 'images/uses/figma.svg',
        link: 'https://www.figma.com/'
      },
      {
        name: 'Adobe Photoshop',
        description: 'Logo Design',
        image: 'images/uses/ps.svg',
        link: 'https://www.adobe.com/'
      },
    ],
    productivity: [
      {
        name: 'Notion',
        description: 'A great note taking app.',
        image: 'images/uses/notion.svg',
        link: 'https://www.notion.so/'
      },
    ],
    video: [
      {
        name: 'OBS',
        description: 'What I use to stream and make recordings.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/OBS_Studio_Logo.svg/768px-OBS_Studio_Logo.svg.png',
        link: 'https://obsproject.com/'
      },
    ]
	})

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
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }}>
        <Image
          radius="md"
          src="images/about/setup.jpg"
          alt="Random unsplash image"
        />
      </div>
      <h3>Development</h3>
      {
      uses.development.map((use, key) => (
        <a href={use.link} target="_blank" key={key}>
          <div className="card--article-preview" style={{ borderBottom: 'none' }}>
            <div className="article-preview__body">
              <h3><img src={use.image} width="72" height="72" /></h3>
              <div>
                <strong>{use.name}</strong>
                <br />
                <small>{use.description}</small>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </a>
      ))
      }
      <h3>Design</h3>
      {
      uses.design.map((use, key) => (
        <a href={use.link} target="_blank" key={key}>
          <div className="card--article-preview" style={{ borderBottom: 'none' }}>
            <div className="article-preview__body">
              <h3><img src={use.image} width="72" height="72" /></h3>
              <div>
                <strong>{use.name}</strong>
                <br />
                <small>{use.description}</small>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </a>
      ))
      }
      <h3>Productivity</h3>
      {
      uses.productivity.map((use, key) => (
        <a href={use.link} target="_blank" key={key}>
          <div className="card--article-preview" style={{ borderBottom: 'none' }}>
            <div className="article-preview__body">
              <h3><img src={use.image} width="72" height="72" /></h3>
              <div>
                <strong>{use.name}</strong>
                <br />
                <small>{use.description}</small>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </a>
      ))
      }
      <h3>Video</h3>
      {
      uses.video.map((use, key) => (
        <a href={use.link} target="_blank" key={key}>
          <div className="card--article-preview" style={{ borderBottom: 'none' }}>
            <div className="article-preview__body">
              <h3><img src={use.image} width="72" height="72" /></h3>
              <div>
                <strong>{use.name}</strong>
                <br />
                <small>{use.description}</small>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </a>
      ))
      }
      </ContainerSmall>
  </SectionInner>
  </>
  )
}

export default Uses;