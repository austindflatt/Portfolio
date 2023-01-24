import styled from 'styled-components'

const ContainerSmall = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 481px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export default ContainerSmall