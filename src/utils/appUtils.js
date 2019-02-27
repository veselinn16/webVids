const noOp = () => ({ type: 'NO_OP'}); // this is the default function to which onFail and onSuccess are assigned if no action creator is passed to them!

// used for creating a payload object in the createAction() call. This is needed in the api middleware
export const apiPayloadCreator = () => ({
    url = '/',
    method = 'GET',
    onSuccess = noOp,
    onFail = noOp,
    label = '',
    data = null
}) => () => ({
    url,
    method,
    onSuccess,
    onFail,
    label,
    data
});

// const blah = apiPayloadCreator();
// console.log(blah);