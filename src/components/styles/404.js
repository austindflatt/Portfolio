import styled from 'styled-components';

export const Error = styled.div`
    justify-content: center;
    text-align: center;
`;

export const NotFoundHeading = styled.h1`
    color: #FFF;
    font-size: clamp(100px, 25vw, 200px);
    line-height: 1;
`;

export const NotFoundSubHeading = styled.p`
    font-size: clamp(30px, 5vw, 50px);
	font-size: 1rem;
    font-weight: 300;
	color: #cbc8d0;
`;

export const Lost = styled.div`
	content:url(images/404.webp);
	width: 400px;
`;

export const LostSize = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;