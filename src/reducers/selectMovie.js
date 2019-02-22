import { hanldeActions } from 'redux-actions';
import { SELECT_MOVIE } from '../constants/actionTypes';

export default hanldeActions(
    {
        [SELECT_MOVIE]: (state, action) => state
    },
    1
)