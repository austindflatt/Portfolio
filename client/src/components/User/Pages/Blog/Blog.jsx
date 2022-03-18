import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { TextInput, TextInputProps, ActionIcon } from '@mantine/core';

export const SectionInner = styled.div`
    position: relative;
    padding-top: 88px;
    padding-bottom: 88px;
`;

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 481px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;


function ProjectsCollection() {
	const [search, setSearch] = useState('')

    // const handleSearch = () => {
    // 	return blogs.filter((blog) => (
	// 		blog.title.toLowerCase().includes(search)
	// 	))
	// }
    
    return (
        <>
        <Helmet>
            <title>Blog | Austin Flatt</title>
            <meta name='description' content='Archive of my blog.' />
            <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering equipment, louisville coding' />
        </Helmet>
        <Container>
            <SectionInner>
            <br />
            <h2>Blog</h2>
            <TextInput
            size="md"
            placeholder="Search for blog posts"
            value={null}
            onChange={(e) => setSearch(e.target.value)}
            rightSectionWidth={42}
            style={{ marginBottom: '20px', padding: '15px' }}
            />
            <p>Blog coming soon!</p>
            </SectionInner>
        </Container>
        </>
    )
}

export default ProjectsCollection;