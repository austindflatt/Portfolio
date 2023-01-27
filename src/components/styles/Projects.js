import styled from 'styled-components'

export const ProjectHome = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 20px;
    width: 100%;

    @media (max-width:639px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 60px 20px;
        width: 100%;
    }
`;

export const ProjectHomeCard = styled.div`
    @media (min-width:641px) {
        overflow: hidden;
        opacity: 1;
        border-radius: 6px;
        transition: all 0.5s ease 0s;
    }
`;

export const ProjectBox = styled.div`
    @media (min-width:641px) {
        border-radius: 6px;
        padding: 15px;
        transition: all 0.5s ease 0s;
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 200px;
    opacity: 1;
	border-radius: 4px;
    backgroundImage: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%);
    transition: transform 0.4s ease;
    transform-origin: 50% 50%;}

    @media (max-width:641px) {
        width: 100%;
        height: 221px;
        opacity: 1;
        border-radius: 4px;
        backgroundImage: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%);
        transition: transform 0.4s ease;
        transform-origin: 50% 50%;}
    }

    @media (min-width:641px) {
        &:hover {
            transform: scale(1.2);
            width: 100%;
        }
    }
`;

export const ImageBox = styled.div`
    width: 100%;
    height: 200px;
    overflow:hidden;

    @media (max-width:641px) {
        width: 100%;
        height: 221px;
        overflow:hidden;
    }
`;

export const ProjectHomeLinks = styled.div`
    display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	align-items: center;
	padding-top: 10px;
`;

export const ProjectWrapper = styled.div`

`;

export const ProjectTitle = styled.span`
    font-size: 16px;
	transition: all 0.2s ease 0s;
`;

export const SectionInner = styled.div`
    position: relative;
    padding-top: 88px;
    padding-bottom: 88px;
`;

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 481px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;