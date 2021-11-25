import styled from 'styled-components'

const Button = styled.a`
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
    min-width: 170px;

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

    @media (max-width: 639px) {
        display: flex;
    }
`;

export default Button