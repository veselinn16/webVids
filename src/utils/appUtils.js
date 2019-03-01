const noOp = () => ({ type: 'NO_OP'}); // this is the default function to which onFail and onSuccess are assigned if no action creator is passed to them!

// used for creating a payload object in the createAction() call. The properties are needed in the api middleware
// the first expression passes default parameters to the properties if they are not set later on
export const apiPayloadCreator = ({
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

// export const apiPayloadCreator = () => {
//     let url = '/',
//     method = 'GET',
//     onSuccess = noOp,
//     onFail = noOp,
//     label = '',
//     data = null

//     return function() {
//         return {
//             url,
//             method,
//             onSuccess,
//             onFail,
//             label,
//             data
//         }
//     }
// }