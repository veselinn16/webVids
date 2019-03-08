import React, { Component, Fragment } from 'react';
import Icon from './Icon';
import StyledHeader from './StyledHeader';
import StyledHeaderTitle from './StyledHeaderTitle';
import StyledHorizontalScroll from './StyledHorizontalScroll';
import Movie from './Movie';
import StyledFooter from './StyledFooter';
import StyledLargeButton from './StyledLargeButton';
import HelpMenuContainer from '../containers/HelpMenuContainer';
import StyledLoader from './StyledLoader';
import { Link } from 'react-router-dom';

class Movies extends Component {
    componentDidMount() {
        this.props.getMovies();
    }
    render() {
        return(
            <Fragment>
                <StyledHeader>
                    <HelpMenuContainer/>
                    <StyledHeaderTitle>Movie Recommendations</StyledHeaderTitle>
                    <Icon icon="search" />
                </StyledHeader>
                <StyledHorizontalScroll>
                    {this.props.loading ? 
                    <StyledLoader /> 
                    : 
                    this.props.movies.map(movie => (
                        <Link to={`/movies/${movie.id}`} style={{textDecoration: 'none',
                            cursor: 'pointer'}} key={movie.id}>
                            <Movie
                                poster={movie.poster}
                                duration={movie.duration}
                                name={movie.name}
                                year={movie.year}
                            />
                        </Link>
                    ))}
                </StyledHorizontalScroll>
                <StyledFooter>
                    <StyledLargeButton>Get Recommended Movies</StyledLargeButton>
                </StyledFooter>
            </Fragment>
        )
    }
}
    

export default Movies;