import axios from 'axios';
import { API } from '../constants/actionTypes'; // this middleware only responds to actions of type API
import { apiEnd, apiStart } from '../actions/apiActions'; // action creators

// default axios request object config
axios.defaults.baseURL = 'https://api.myjson.com/bins/'; // sets up the baseURL, which is the same across all requests
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${'fakeAccessToken'}`;

const api = ({dispatch}) => next => action => {
    // console.log('fds')
    // console.log(typeof action);
    next(action);
    if(action.type !== API) return; // ignore all actions that are not of type 'API'

    const { url, method, data, onSuccess, onFail, label } = action.payload; // extract data from action payload

    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data'; // with GET and DELETE we use 'params'. If any other type - PUT f.ex. we use 'data'

    // start of API request
    if(label) {
        dispatch(apiStart(label)); // dispatches the following action:
        // {
        //     type: API_START,
        //     payload: label --> retrieved from the action payload
        // }
        // this action always lets us know when the API request starts
    }

    // make actual API request
    axios.request({
        url,
        method,
        [dataOrParams]: data
    })
    .then(({data}) => { // if request is successful
        dispatch(onSuccess(data)); // action creator with data passed in to the payload
    })
    .catch(error => { // if request is failed
        dispatch(onFail(error));
    })
    .finally(() => { // dispatches the apiEnd action with label in the payload
        if(label) {
            dispatch(apiEnd(label)); // this action always lets us know when the API request finishes
        }
    })
};

export default api;