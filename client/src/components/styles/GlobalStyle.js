import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	:root {
	--main: #007CF0;
	--main-tint: #007cf010;
	--bg: #fff;
	--main-text: #000;
	--focus: #22cc52;
	--green: #22cc52;
	--orange: #FF4D4D;
	--yellow: #ffbd2e;
	--border-radius: 4px;
	}

	::selection {
		background-color: var(--green);
		color: var(--white);
	}
	
	html {
		line-height: 1.15;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}
	
	body {
		background: var(--bg);
		margin: 0;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}
	
	html {
		box-sizing: border-box;
	}
	
	*,
	  :after,
	  :before {
		box-sizing: inherit;
	}
	
	hr {
		border: 0;
		display: block;
		height: 1px;
		background: #e9edf3;
		margin-top: 24px;
		margin-bottom: 24px;
	}
	
	ol,
	  ul {
		margin-top: 0;
		margin-bottom: 24px;
		padding-left: 24px;
	}
	
	ul {
		list-style: circle;
	}
	
	li > ul {
		margin-bottom: 0;
	}
	
	html {
		font-size: 20px;
		line-height: 30px;
	}
	
	body {
		color: var(--main-text);
		font-size: 1rem;
	}
	
	img {
		border-radius: 4px;
	}
	
	body,
	  button,
	  input,
	  select,
	  textarea {
		font-family: Fira Sans,sans-serif;
	}
	
	a {
		color: var(--main);
		transition: 250ms ease-out color;
		text-decoration: none;

		&:hover {
		color: var(--green);
		}
	}

	h1 {
		color: var(--main-text);
		font-size: 50px;
		line-height: 48px;
		letter-spacing: -0.1px;
		color: var(--main-text)
	}
	
	@media (min-width: 641px) {
		.h1,
		h1 {
			font-size: 44px;
			line-height: 54px;
			letter-spacing: 0;
			color: var(--main-text)
		}
	}
	
	.h2,
	  h2 {
		font-size: 32px;
		line-height: 42px;
		letter-spacing: -0.1px;
		color: var(--main-text)
	}
	
	@media (min-width: 641px) {
		.h2,
		h2 {
			font-size: 38px;
			line-height: 48px;
			letter-spacing: -0.1px;
			color: var(--main-text)
		}
	}
	
	.h3 {
		font-size: 20px;
		font-weight: 400;
		line-height: 34px;
		letter-spacing: -0.1px;
		color: var(--main-text)
	}

	#skills h3 {
		font-size: 10px;
		font-weight: 400;
	}
	
	.h3 sup {
		font-size: 14px;
		line-height: 24px;
		margin-right: 6px;
		/* transition: all 0.25s ease-in-out 0s; */;
	}
	
	.h1,
	  .h2,
	  h1,
	  h2 {
		margin-top: 0px;
		margin-bottom: 16px;
		color: var(--main-text);
	}
	
	.h3,
	  h3 {
		margin-top: 36px;
		margin-bottom: 12px;
	}
	
	p {
		margin-top: 0;
		margin-bottom: 24px;
		color: var(--main-text);
		font-size: 1rem;
		line-height: 1.35;
		letter-spacing: -0.01em;
		color: #262626;
	}
	
	@media (max-width: 639px) {
		p {
			margin-top: 0;
			margin-bottom: 24px;
			color: var(--main-text);
			font-size: 1rem;
			line-height: 1.35;
			letter-spacing: -0.01em;
			color: #262626;
		}
	}

	.container,
	.container_small {
		width: 100%;
		margin: 0 auto;
		padding-left: 16px;
		padding-right: 16px;
	}

	@media (min-width: 481px) {
		.container,
		.container_small {
			padding-left: 24px;
			padding-right: 24px;
		}
	}

	.container {
		max-width: 1280px;
	}

	.container_small {
		max-width: 848px;
	}

	.container .container_small {
		max-width: 1280px;
		text-align: center;
		padding-left: 0;
		padding-right: 0;
	}

	.button {
		display: inline-flex;
		font-size: 14px;
		letter-spacing: 0;
		line-height: 16px;
		text-decoration: none !important;
		color: var(--main);
		border: none;
		border-radius: 2px;
		transition: all 0.2s ease 0s;
		cursor: pointer;
		justify-content: center;
		padding: 16px 32px;
		height: 48px;
		text-align: center;
		white-space: nowrap;
		transition: all 0.2s;
	}
	
	.button-primary {
		color: var(--main);
		background-color: transparent;
		border: 1px solid var(--main);
		transition: all 0.2s ease 0s;
		border-radius: var(--border-radius);
		font-family: Fira Sans,sans-serif;
	
		&:hover {
			background-color: var(--main-tint);
			color: var(--main);
		}
	}

	@media (min-width: 641px) {
		.site-header::before {
			display: none;
		}
	}
	
	.splash {
		text-align: center;
		padding-top: 7em;
	}
	
	.splash-copy {
		position: relative;
	}
	
	.splash-name {
		color: var(--main);
		margin-bottom: auto;
		font-family: Fira Sans,sans-serif;
		font-size: 1.3rem;
	}
	
	.splash-paragraph {
		margin-bottom: 32px;
		font-size: 1.3rem;
	}
	
	.splash-cta {
		max-width: 400px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 80px;
	}
	
	.splash-media {
		position: relative;
	}
	
	.splash-media-container {
		position: relative;
	}
	
	.splash-media-image {
		opacity: 0.4;
		transition: 0.5s;
		margin: 0 auto;
		-moz-box-shadow: .5em .5em rgb(17, 17, 17);
		box-shadow: .5em .5em rgb(17, 17, 17);
		border-radius: var(--border-radius);
	}
	
	.job {
		position: relative;
		display: inline-block;
		cursor: pointer;
		color: var(--blue);
	}
	
	.setup {
		max-width: 100%;
		display: block;
	}
	
	@media (max-width: 639px) {
		.splash-cta > * {
			justify-content: center;
		}
	
		.splash-cta > * + * {
			margin-top: 32px;
		}
	}
	
	@media (min-width: 641px) {
		.splash {
			text-align: left;
			padding-bottom: 50px;
		}
	
		.splash-inner {
			display: flex;
			justify-content: space-between;
		}
	
		.splash-copy {
			padding-top: 40px;
			padding-right: 48px;
			min-width: 448px;
			max-width: 512px;
			z-index: 1;
		}
	
		.splash-title {
			margin-bottom: 16px;
		}
	
		.splash-name {
			color: var(--main);
			margin-bottom: auto;
		}
	
		.splash-paragraph {
			margin-bottom: 32px;
			animation: fadeIn 2s forwards;
			font-size: 1.3rem;
			line-height: 1.35;
			letter-spacing: -0.01em;
		}
	
		.splash-cta {
			display: flex;
			align-items: center;
			margin: 0;
			animation: fadeIn 2s forwards;
		}
	
		.splash-cta .button {
			min-width: 170px;
		}
	
		.splash-cta .button:first-child {
			margin-right: 32px;
		}
	
		.splash-media {
			z-index: 0;
		}
	
		.splash-media img {
			width: 330px;
			border-radius: 6px;
		}
	
		.splash-media img:hover {
			filter: none;
		  /* -webkit-filter: grayscale(0); */;
		}
	}
	
	@media (max-width: 639px) {
		.splash-media img {
			width: 300px;
			border-radius: 6px;
		}
	}
	/* End Splash Styling */
	
	/* CTA Styling */
	.cta {
		position: relative;
	}
	
	.cta .section-paragraph {
		margin-bottom: 32px;
	}
	
	.cta::before {
		position: absolute;
		bottom: -32px;
		left: calc(50% - 720px);
		height: 263px;
		width: 1440px;
	}
	
	.cta-cta {
		max-width: 400px;
		margin-left: auto;
		margin-right: auto;
	}
	
	@media (max-width: 639px) {
		.cta-cta .button {
			display: flex;
		}
	}
	
	@media (min-width: 641px) {
		.cta .section-paragraph {
			margin-bottom: 40px;
			padding-left: 72px;
			padding-right: 72px;
		}
	
		.cta::before {
			bottom: 0;
		}
	
		.cta-cta .button {
			min-width: 170px;
		}
	}

	.icon {
		transition: all 300ms ease 0s;
		color: rgb(79, 184, 255);
		cursor: pointer;
		text-decoration: none;
	}
	
	.icon-github {
	
	&: hover {
		transition: all 300ms ease 0s;
		fill: #6f42c1;
	}
}
	
	.icon-linkedin {
	
	&:hover {
		transition: all 300ms ease 0s;
		fill: #0a66c2;
	}
}
	
	.icon-twitch {
	
	&:hover {
		transition: all 300ms ease 0s;
		fill: #6f42c1;
	}
}
	
	
	.icon-twitter {
	
	&:hover {
		transition: all 300ms ease 0s;
		fill: #1DA1F2;
	}
}
	
	.icon-youtube {
	
	&:hover {
		transition: all 300ms ease 0s;
		fill: #c00;
	}
}

	.project-link {
	margin-right: 10px;
	}

	.project-home-links span {
	font-size: 16px;
	transition: all 0.2s ease 0s;
	}

	.project-link svg {
	width: 20px;
	height: 20px;
	transition: all 0.2s ease 0s;
	}

	.project-ext {
	
	&:hover {
	transition: all 300ms ease 0s;
	fill: var(--main);
	}
}

	@media (max-width:639px) {
		.project-home {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 60px 20px;
		width: 100%;
	}
}

	input {
	border: 2px solid #eaeaea;
    border-radius: 6px;
    height: 60px;
    width: 100%;
    color: var(--main-text);
    transition: all 0.2s ease 0s;
    outline: none;
    font-size: inherit;
    padding: 15px;
	background-color: #fff;
}

	textarea {
	border: 2px solid #eaeaea;
    border-radius: 6px;
	width: 100%;
	color: var(--main-text);
	transition: all 0.2s ease 0s;
	outline: none;
	font-size: inherit;
	padding: 15px;
	background-color: #fff;
	height: 280px;
	resize: none;
	margin-top: 6px;
}

	.input .label {
    color: var(--main-text);
    font-size: 20px;
}

	input {

	&:focus {
	border: 2px solid var(--focus);
	transition: 0.2s;
	}
}

	textarea {
	
	&:focus {
	border: 2px solid var(--focus);
	transition: 0.2s;
	}
}

	::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
	color: var(--main-text);
	opacity: 0.8;
  }

	.setup {
	max-width: 100%;
    display: block;
}

	.nav-logo {
	line-height: 1;
	font-weight: 500;
	font-size: 25px;
	text-decoration: none;
	color: var(--main);
	transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

	.links {
	color: var(--main-text);
	font-family: Fira Sans,sans-serif;
	font-size: 17px;
	margin: 10px;
	padding: 0;
	list-style: none;
	display: inherit;

	&:hover {
	color: var(--main);
	}
}

	.links-active {
	color: var(--main);
}
`

export default GlobalStyle