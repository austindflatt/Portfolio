import React from 'react';
import styled from 'styled-components';

export const FooterCopyright = styled.div`
    flex: none;
    width: 100%;
    background-color: #fafafa;
    border-top: 1px solid #eaeaea;
    display: inline-flex;
    z-index: 300;
    flex: 50%;
    padding-bottom: 20px;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	font-size: 0.8rem;
	font-weight: 400;
	text-align: center;
	position: absolute;
`;

function Footer() {

    return (
        <>
        <FooterCopyright>
            <br />Made with 💚 and various tech in Louisville
            <br />Designed and built by Austin Flatt
        </FooterCopyright>
        </>
    )
}

export default Footer;