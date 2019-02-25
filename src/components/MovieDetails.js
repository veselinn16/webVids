import React from 'react';
import StyledHeader from './StyledHeader';
import Icon from './Icon';
import StyledHeaderLink from './StyledHeaderLink';

const MovieDetails = () => (
    <StyledHeader>
        <StyledHeaderLink href='/'>
            <Icon icon="chevron-left" text="Go Back"/>
        </StyledHeaderLink>
    </StyledHeader>
)

export default MovieDetails;