import React, { Component, Fragment } from 'react';
import ReactStars from 'react-stars';

import styled from 'styled-components';

import StyledHeader from './StyledHeader';
import StyledHeaderLink from './StyledHeaderLink';
import Icon from './Icon';
import StyledPoster from './StyledPoster';
import StyledMovieTitle from './StyledMovieTitle';
import StyledMovieLengthYear from './StyledMovieLengthYear';
import { devices } from '../utils/styledUtils';

const StyledMovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    ${devices.md`
        flex-direction: row;
    `}
`;

const StyledMovieInfo = styled.div`
    padding: 2rem 0 1rem 0;
    ${devices.md`
        ${
            ''
        }
        margin-left: 13rem;
    `}
`;

const StyledMovieDesc = styled.div`
        margin-top: 30px;
        font-size: .8rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, .5);
`;

const StyledSmallBtn = styled.a`
        background: #eb6259;
        border: none;
        border-radius: 20px;
        color: #fff;
        font-size: 12px;
        line-height: 1.5;
        display: inline-block;
        padding: 8px 17px;
        margin: 20px 0 15px 0;
        text-transform: uppercase;
        z-index: 10;
        outline: none !important;
        cursor: pointer;

        &:active {
            transform: translateY(4px);
        }
`;

class MovieDetails extends Component {
    static defaultProps = {
        selectedMovie: {
            name: "",
            poster: "",
            year: "",
            duration: "",
            trailer: "",
            details: "",
            id: "0"
        }
    };
    componentDidMount() {
        const movieId = +this.props.match.params.id;
        console.log(typeof this.props.selectMovie); // returns undefined
        this.props.selectMovie(movieId);
    }
    render() {
        const { poster, name, duration, details, year } = this.props.selectedMovie;

        return(
            <Fragment>
                <StyledHeader>
                    <StyledHeaderLink href='/'>
                        <Icon icon='chevron-left' text='Go back'/>
                    </StyledHeaderLink>
                </StyledHeader>
                <StyledMovieDetails>
                    <StyledPoster src={poster} alt={`Movie: ${name}`} isExpanded />
                    <StyledMovieInfo>
                        <StyledMovieTitle isLarge>{name}</StyledMovieTitle>
                        <StyledMovieLengthYear>{`${duration} ${year}`}</StyledMovieLengthYear>
                        <StyledMovieDesc>{details}</StyledMovieDesc>
                        <StyledSmallBtn>Watch Trailer</StyledSmallBtn>
                        <ReactStars count={5} size={24} color={'#ffd700'}/>
                    </StyledMovieInfo>
                </StyledMovieDetails>
            </Fragment>
        )
    }
}

export default MovieDetails;