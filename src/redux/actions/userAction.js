import axios from 'axios';
import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL
} from '../constants/userConstants';

export const userAction = () => async (dispatch) => {
    try { 
        dispatch({ type: GET_USERS_REQUEST });
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data,
        });

    } catch (err) {
        dispatch({
            type: GET_USERS_FAIL,
            payload: err.data && err.response.data.message 
            ? err.response.data.message : err.message,
        });
    }
};