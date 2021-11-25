import React from 'react';
import { data } from '../../data/data';
import { social } from '../../data/social';
import Container from '../styles/Container'
import Button from '../styles/Button'
import styled from 'styled-components';

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

    @media (max-width:639px) {
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

function Splash() {

    return (
        <>
        <section className="splash">
        <Container>
        <div className="splash-inner">
        <div className="splash-copy">
        <p className="splash-name">Hey <Hand>👋🏻 </Hand> my name is</p>
        <h1 className="splash-title">{data.name}.</h1>
        <p className="splash-paragraph">I'm a {data.title} 🚀 living in Louisville, Kentucky.</p>
        <Social>
        <SocialLink href={social.github} rel="noreferrer" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon-github" width="35" height="40" viewBox="0 0 24 24" fill="#262626">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        </SocialLink>
        <SocialLink href={social.linkedin} rel="noreferrer" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon-linkedin" width="35" height="40" viewBox="0 0 24 24" fill="#262626">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        </SocialLink>
        <SocialLink href={social.instagram} rel="noreferrer" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon-instagram" width="35" height="40" viewBox="0 0 24 24" fill="#262626">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        </SocialLink>
        <SocialLink href={social.twitter} rel="noreferrer" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon-twitter" width="35" height="40" viewBox="0 0 24 24" fill="#262626">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
        </SocialLink>
        <SocialLink href={social.youtube} rel="noreferrer" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon-youtube" width="35" height="40" viewBox="0 0 24 24" fill="#262626">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
        </SocialLink>
        </Social>
        <div className="splash-cta"> <Button href={data.resume} rel="noreferrer" target="_blank">Resume</Button>
        </div>
        </div>
        <div className="splash-media">
        <div className="splash-media-container"> <img src={data.headshot} loading="lazy" alt="Headshot" /></div>
        </div>
        </div>
        </Container>
        </section>
        </>
    )
}

export default Splash;