import styled from 'styled-components';

const StyledHeader = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    color: #8b9095;
    font-size: .8rem;
    > * {
        z-index: 10;
    }
`;

export default StyledHeader;