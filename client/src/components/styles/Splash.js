import styled from 'styled-components'

export const SplashSection = styled.section`
    text-align: left;
	padding-bottom: 50px;
    padding-top: 7em;
`;

export const SplashInner = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SplashCopy = styled.div`
    padding-top: 40px;
	padding-right: 48px;
	min-width: 448px;
	max-width: 512px;
	z-index: 1;
`;

export const SplashName = styled.p`
    color: var(--main);
	margin-bottom: auto;
	font-family: Fira Sans,sans-serif;
`;

export const SplashIntro = styled.p`
    margin-bottom: 32px;
`;

export const SplashCTA = styled.div`
	margin-left: auto;
	margin-bottom: 80px;
    margin-right: 32px;

    max-width: 400px;
	margin-left: auto;
	margin-right: auto;
`;

export const SplashMedia = styled.div`
    position: relative;
`;

export const SplashMediaContainer = styled.div`
    position: relative;
`;

export const SplashMediaImage = styled.img`
    width: 400px;
    background-color: #fafafa;
    border: 1px solid #eaeaea;
    border-radius: 6px;

    @media (max-width: 639px) {
        width: 300px;
        background-color: #fafafa;
        border: 1px solid #eaeaea;
        border-radius: 6px;
    }
`;


export default SplashSection;