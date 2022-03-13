import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from '../../styles/Container';
import ContainerSmall from '../../styles/ContainerSmall';
import SectionInner from '../../styles/SectionInner';
import styled from 'styled-components';

export const Error = styled.div`
    justify-content: center;
    text-align: center;
`;

export const NotFoundHeading = styled.h1`
    color: var(--green);
    font-size: clamp(100px, 25vw, 200px);
    line-height: 1;
`;

export const NotFoundSubHeading = styled.p`
    font-size: clamp(30px, 5vw, 50px);
    font-weight: 400;
`;

export const Lost = styled.div`
content:url(images/404.webp);
width: 400px;
`;

export const LostSize = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const PageNotFound = () => {
    return (
        <>
        <Helmet>
            <title>Page Not Found | Austin Flatt</title>
            <meta name='description' content='Page Not Found' />
            <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
        </Helmet>
        <Container />
            <SectionInner>
                <ContainerSmall>
                    <Error>
                    <LostSize>
                    <Lost loading="lazy" />
                    </LostSize>
                    <NotFoundHeading>404</NotFoundHeading>
                    <NotFoundSubHeading>Sorry, this page doesn't exist.</NotFoundSubHeading>
                    <Link to="/" className="button button-primary">Go Home</Link>
                    </Error>
                </ContainerSmall>
            </SectionInner>
        </>
    )
}

export default PageNotFound;