// CSS-in-JS
import styled from 'styled-components'; // default exported object 

const StyledContainer = styled.div`
    background: ${props => props.theme.primaryBg};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: 'WEBVIDS';
        position: fixed;
        top: 18vh;
        left: 10vw;
        font-size: 9vw;
        color: rgba(255, 255, 255, .03);
    }
`;

export default StyledContainer;