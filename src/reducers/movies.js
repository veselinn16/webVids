import { handleActions } from "redux-actions"; // this yields a reducer
import { SET_MOVIES } from '../constants/actionTypes';

export default handleActions(
    {
        [SET_MOVIES]: (state, action) => action.payload // GET_MOVIES has square brackets, because it's a variable
        // this action sets the movies returned by the network request to be the movies in the Redux store
    },
    {}
); // first arg - object(action.type -> reducer to handle it); second arg - initial state to return