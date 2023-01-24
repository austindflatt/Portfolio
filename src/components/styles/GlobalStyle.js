import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	:root {
	--main: #000;
	--main-tint: #007cf010;
	--bg: #fff;
	--main-text: #000;
	--focus: #22cc52;
	--green: #868e96;
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
		color: #C00;
		}
	}

	h1 {
		color: var(--main-text);
		font-size: 50px;
		line-height: 48px;
		letter-spacing: -0.1px;
		color: var(--main-text)
	}
	
	@media (min-width: 814px) {
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
	
	@media (min-width: 814px) {
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

	@media (min-width: 814px) {
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
		font-size: 1.1rem;
	}
	
	.splash-cta {
		max-width: 400px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 80px;
	}
	
	.splash-media {
		display: block;
	}
	
	.splash-media-container {

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
	
	@media (min-width: 814px) {
		.splash {
			text-align: left;
			padding-bottom: 50px;
		}
	
		.splash-inner {
			display: flex;
			justify-content: space-between;
		}
	
		.splash-copy {
			max-width: 512px;
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
			font-size: 1.1rem;
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


		}
	
		.splash-media img:hover {
			filter: none;
		  /* -webkit-filter: grayscale(0); */;
		}
	}
	
	@media (max-width: 814px) {
		.splash-media img {
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
	
	@media (min-width: 814px) {
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
		cursor: pointer;
		text-decoration: none;
		&:hover {
			transition: all 300ms ease 0s;
			fill: #000;
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
	color: #C00;
	}
}

	.links-active {
	color: #C00;
}

.photo-deck {
	/* background: lightblue; */
	position: fixed;
	overflow: hidden;
	width: 100%;
	height: 100%;
  }
  
  .photo-deck > div {
	position: absolute;
	width: 100vw;
	height: 100vh;
	will-change: transform;
	display: flex;
	align-items: center;
	justify-content: center;
  }
  
  .photo-deck > div > div {
	background-color: #fff;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	will-change: transform;
	border: 1em solid #fff;
	border-bottom: 4em solid #fff;
	border-radius: 3px;
	box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
  }

`

export default GlobalStyle