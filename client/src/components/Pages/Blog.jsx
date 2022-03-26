import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { TextInput, TextInputProps, ActionIcon } from '@mantine/core';
import ContainerSmall from '../styles/ContainerSmall';
import SectionInner from '../styles/SectionInner';

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
        <ContainerSmall>
            <SectionInner>
            <br />
            <h2>Blog</h2>
            <p>Blog coming soon!</p>
            </SectionInner>
        </ContainerSmall>
        </>
    )
}

export default ProjectsCollection;