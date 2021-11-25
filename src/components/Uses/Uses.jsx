import React from 'react';
import { Helmet } from 'react-helmet';
import { data } from '../../data/data';
import Container from '../styles/Container'
import ContainerSmall from '../styles/ContainerSmall'
import SectionInner from '../styles/SectionInner'

function Uses() {

    return (
        <>
            <Helmet>
                <title>Uses | Austin Flatt</title>
                <meta name='description' content='Here is a quick look at some of the software and hardware I currently use everyday for development.' />
                <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
            </Helmet>
            <Container />
            <SectionInner>
            <br />
            <ContainerSmall>
            <h2>Tools that I use 👨🏻‍💻</h2>
            <p>Here's a quick look at some of the software and hardware I currently use everyday for development.</p>
            <h2>Equipment</h2>
            <ul>
            <li>2020 M1 MacBook Pro, 16GB RAM 512GB SSD.</li>
            <li>Logitech MX Master 3 Mouse</li>
            <li>Logitech MX Keys</li>
            <li>The monitor I use is a <a href="https://www.lg.com/us/monitors/lg-27up600-w-4k-uhd-monitor" rel="noreferrer" target="_blank">LG UHD 4K 27UP600-W 27-Inch</a></li>
            <li>My desk is a <a href="https://www.overstock.com/Home-Garden/Hi5-Electric-Height-Adjustable-Standing-Desks-with-Rectangular-Tabletop-47.20-x-24-with-with-4-Color-Options/32309510/product.html?opre=1" rel="noreferrer" target="_blank">Hi5 47" Electric standing desk</a></li>
            </ul>
            <h2>Coding and design tools</h2>
            <ul>
            <li>I use <a href="https://code.visualstudio.com/" rel="noreferrer" target="_blank">Visual Studio Code</a> and <a href="https://www.jetbrains.com/pycharm/" rel="noreferrer" target="_blank">PyCharm</a>.</li>
            <li>For my terminal, I use the built in MacOS.</li>
            <li><a href="https://www.figma.com/" rel="noreferrer" target="_blank">Figma</a> has had a huge impact on the way I create prototypes and wireframes.</li>
            <li><a href="https://www.adobe.com/" rel="noreferrer" target="_blank">Adobe Photoshop</a> for designing and image editing.</li>
            </ul>
            <h2>Productivity Apps</h2>
            <ul>
            <li>I take notes using <a href="https://notion.so/" rel="noreferrer" target="_blank">Notion</a>.</li>
            <li><a href="https://getpostman.com/" rel="noreferrer" target="_blank">Postman</a> plays a major role when creating and testing APIs.</li>
            <li><a href="https://applemusic.com/" rel="noreferrer" target="_blank">Apple Music</a>, when listening to music 😎.</li>
            </ul>
            <h2>Website built with 🚀</h2>
            <ul>
            <li><a href="https://reactjs.org/" rel="noreferrer" target="_blank">React.js</a></li>
            <li><a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">Node.js</a></li>
            <li><a href="https://expressjs.com/" rel="noreferrer" target="_blank">Express</a></li>
            <li>GitHub</li>
            <li>Love 💚</li>
            </ul>
            </ContainerSmall>
            </SectionInner>
        </>
    )
}

export default Uses;