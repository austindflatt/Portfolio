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
    opacity: 1;
	border-radius: 4px;

    @media (min-width:641px) {
        &:hover {
            opacity: 0.7;
            transition: 0.2s;
        }
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