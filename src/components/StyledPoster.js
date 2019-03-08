import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

// check if an element has isExpanded prop to apply different styling
const StyledPoster = styled.img`
    width: ${(props => props.isExpanded ? 
        props.theme.posterWidthExpanded : 
        props.theme.posterWidth)};
    height: ${(props => props.isExpanded ? 
        props.theme.posterHeightExpanded : 
        props.theme.posterHeight)};
    border-radius: 4px;
    ${devices.md`
        position: ${props => (props.isExpanded ? 'absolute' : 'initial')};
        top: ${props => (props.isExpanded ? '-10%' : 'initial')};
        left: ${props => (props.isExpanded ? '-6%' : 'initial')};
    `}
`;

export default StyledPoster;