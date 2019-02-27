import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { getMovies } from '../actions/movieActions';
import Movies from '../components/Movies';

// this container acts as a bridge between the Movies component and whatever props are made available via the connect(). Essentially, this container communicates with Redux's state and passes the props to the Movies component
const MoviesContainer = props => <Movies {...props}/>;

const mapStateToProps = state => ({
    movies: _.values(state.movies) // converts the object's key values into an array
}); // this will be accessible via props

export default connect(
    mapStateToProps,
    { getMovies }
)(MoviesContainer);