import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../styles/Container';
import ContainerSmall from '../styles/ContainerSmall';
import SectionInner from '../styles/SectionInner';
import books from './books.json';

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
        <p>Hey I'm Austin, I'm a software engineer.</p>
        <p>Other than coding, I spend most of my free time traveling or playing video games. I've also been reading more lately so feel free to reach out to me with any book recommendations!</p>
        <h2>Favorite Books</h2>
        <p>
            <ul >
                {books.map((book, key) => (
                <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </p>
        <br />
        </ContainerSmall>
        </SectionInner>
        </>
    )
}

export default AboutPage;