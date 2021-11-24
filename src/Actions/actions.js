import axios from "axios";
export const getPotluckUserEventDetaislANDItems = () => {
    return (dispatch) => {
        dispatch (fetchApiActionStart());
        axios.get('')
        .then(res=> {
            console.log('Food Item res data: ', res.data);
            dispatch(fetchUserLoginSuccess(res.data.message))
            dispatch(fetchUserRegisterSuccess(res.data.message))
        })
        .catch(err => {
            dispatch(fetchApiActionFail(err));
        });
    }
}
export const API_ACTION_START = "API_ACTION_START";
export const fetchApiActionStart = () => {
    return({type: API_ACTION_START});
}

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const fetchUserLoginSuccess = (user) => {
    return({type: USER_LOGIN_SUCCESS, payload: user})
}

export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const fetchUserRegisterSuccess = (user) => {
    return({type: USER_REGISTER_SUCCESS, payload: user})
}

export const API_ACTION_FAIL = "API_ACTION_FAIL";
export const fetchApiActionFail = (error) => {
    return({type: API_ACTION_FAIL, payload: error});
}