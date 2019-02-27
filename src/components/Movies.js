import React, { Component, Fragment } from 'react';
import Icon from './Icon';
import StyledHeader from './StyledHeader';
import StyledHeaderTitle from './StyledHeaderTitle';
import StyledHorizontalScroll from './StyledHorizontalScroll';
import Movie from './Movie';
import StyledFooter from './StyledFooter';
import StyledLargeButton from './StyledLargeButton';

class Movies extends Component {
    componentDidMount() {
        this.props.getMovies();
    }
    render() {
        return(
            <Fragment>
                <StyledHeader>
                    <Icon icon="bars" text="help" />
                    <StyledHeaderTitle>Movie Recommendations</StyledHeaderTitle>
                    <Icon icon="search" />
                </StyledHeader>
                <StyledHorizontalScroll>
                    {this.props.movies.map(movie => (
                        <Movie
                            key={movie.id}
                            poster={movie.poster}
                            duration={movie.duration}
                            name={movie.name}
                            year={movie.year}
                        />
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