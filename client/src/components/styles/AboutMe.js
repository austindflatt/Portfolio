import styled from 'styled-components';

export const Tech = styled.ul`
    font-size: 25px;
	font-weight: 500;
	list-style: none;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0px;
	padding: 48px;
`;

export const TechList = styled.li`
    color: #262626;
    display: inline-block;
    flex-basis: 22%;
    margin: 10px;
    padding: 10px;
    font-size: 3rem;
    line-height: 42px;
    letter-spacing: 0.01em;
    white-space: nowrap;

    @media (max-width:639px) {
        display: inline-block;
        flex-basis: 40%;
        margin: 10px;
        padding: 10px;
        font-size: 3rem;
        line-height: 42px;
        letter-spacing: 0.01em;
        white-space: nowrap;
        }
`;

export const Memoji = styled.div`
content:url(images/memoji.webp);
width: 200px;
`;

export const MemojiSize = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;