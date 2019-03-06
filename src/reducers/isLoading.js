import { handleActions } from 'redux-actions';
import produce from 'immer'; // used so we can make direct mutations to the state in the reducer
import { API_START, API_END } from '../constants/actionTypes';
import { GET_MOVIES } from '../constants/label';

export default handleActions(
    {
        [API_START]: produce((state, action) => {
            if(action.payload === GET_MOVIES) {
                state[GET_MOVIES] = true;
            }
        }),
        [API_END]: produce((state, action) => {
            if(action.payload === GET_MOVIES) {
                state[GET_MOVIES] = false;
            }
        })
    },
    {}
)