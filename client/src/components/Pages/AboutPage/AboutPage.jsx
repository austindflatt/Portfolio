import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../styles/Container';
import ContainerSmall from '../../styles/ContainerSmall';
import SectionInner from '../../styles/SectionInner';
import books from './books.json';
import Metrics from '../../Metrics/Metrics'

function AboutPage() {

    return (
        <>
        <Helmet>
            <title>About Me | Austin Flatt</title>
            <meta name='description' content='About Me' />
            <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
        </Helmet>
        <Container />
        <SectionInner>
        <br />
            <ContainerSmall>
                <h2>About Me</h2>
                <p>I'm a Software Engineer with a passion for everything front-end. I love building and creating, whether those things are web applications, or designing in Photoshop. I'm a problem solver and I just love watching my thoughts come to life on screen. Ever since I can remember, I've always had an interest and passion for tech. I specialize in front-end development and make it my mission to create accessible and user-friendly applications and websites.</p>
                <p>Other than coding, I spend most of my free time playing video games or reading! With the latter being reading, so feel free to reach out to me with any book recommendations!</p>
                {/* <h2>Favorite Books</h2>
                <p>
                    <ul >
                        {books.map((book) => (
                        <li key={book.id}>{book.title} by {book.author}</li>
                        ))}
                    </ul>
                </p> */}
                {/* <Metrics /> */}
            </ContainerSmall>
        </SectionInner>
        </>
    )
}

export default AboutPage;