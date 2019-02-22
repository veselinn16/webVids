import { handleActions } from "redux-actions"; // this yields a reducer
import { GET_MOVIES } from '../constants/actionTypes';

export default handleActions(
    {
        [GET_MOVIES]: (state, action) => state // GET_MOVIES has square brackets, because it's a variable
    },
 {}
); // first arg - object(action.type -> reducer to handle it); second arg - initial state to return