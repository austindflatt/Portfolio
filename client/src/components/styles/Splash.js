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

export const Hand = styled.span`
    animation-name: wave-animation;
 /* Refers to the name of your @keyframes element below */
	animation-duration: 2.5s;
 /* Change to speed up or slow down */
	animation-iteration-count: infinite;
 /* Never stop waving :) */
	transform-origin: 70% 70%;
 /* Pivot around the bottom-left palm */
	display: inline-block;

@keyframes wave-animation {
	0% {
		transform: rotate(0deg);
	}

	10% {
		transform: rotate(14deg);
	} /* The following five values can be played with to make the waving more or less extreme */
	20% {
		transform: rotate(-8deg);
	}

	30% {
		transform: rotate(14deg);
	}

	40% {
		transform: rotate(-4deg);
	}

	50% {
		transform: rotate(10deg);
	}

	60% {
		transform: rotate(0deg);
	} /* Reset for the last half to pause */
	100% {
		transform: rotate(0deg);
	}
}
`;

export const Social = styled.div`
    display: flex;
	-webkit-box-align: center;
	align-items: center;
	text-align: center;
	-webkit-box-pack: center;

    @media (max-width:814px) {
        {
            display: flex;
            align-items: center;
            text-align: center;
            -webkit-box-pack: center;
            justify-content: center;
        }
    }
`;

export const SocialLink = styled.a`
    margin-right: 15px;
	margin-bottom: 32px;

    &:hover {
        color: var(--main);
    }
`;