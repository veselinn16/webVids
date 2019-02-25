import React from 'react';
import StyledMovie from './StyledMovie';
import StyledMovieTitle from './StyledMovieTitle';
import StyledPoster from './StyledPoster';
import StyledMovieLengthYear from './StyledMovieLengthYear';

const Movie = ({poster, name, duration, year}) => (
    <StyledMovie>
        <StyledPoster src={poster} alt={`Movie ${name}`}/>
        <StyledMovieTitle>{name}</StyledMovieTitle>
        <StyledMovieLengthYear>{`${duration} ${year}`}</StyledMovieLengthYear>
    </StyledMovie>
);

export default Movie;