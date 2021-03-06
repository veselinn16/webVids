import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { getMovies } from '../actions/movieActions';
import Movies from '../components/Movies';
import { GET_MOVIES } from '../constants/label';

// this container acts as a bridge between the Movies component and whatever props are made available via the connect(). Essentially, this container communicates with Redux's state and passes the props to the Movies component
const MoviesContainer = props => <Movies {...props}/>;

const mapStateToProps = state => ({
    movies: _.shuffle(_.values(state.movies)), // converts the object's key values into an array,
    loading: state.isLoading[GET_MOVIES] // for displaying loader in API requests
}); // this will be accessible via props

export default connect(
    mapStateToProps,
    { getMovies }
)(MoviesContainer);