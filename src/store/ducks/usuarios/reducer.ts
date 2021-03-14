import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';


const initialStateUser: UserState = {
    user: []
};

const reducerUser: Reducer = (state = initialStateUser, action) => {

    switch(action.type) {
        case UserTypes.LOAD_USER_REQUEST:
            return {
                user: action.payload
            }
        case UserTypes.LOAD_USER_SUCCESS:
            return {
                user: action.payload
            }
        case UserTypes.LOAD_USER_FAILURE:
            return {
                ...state
            }

// ---------------------------------------------------------------------------------

        case UserTypes.GET_USER_REQUEST:
            return {
                user: action.payload
            }
        case UserTypes.GET_USER_SUCCESS:
            return {
                user: action.payload
            }
        case UserTypes.GET_USER_FAILURE:
            return {
                ...state
            }

// ---------------------------------------------------------------------------------

        case UserTypes.NEW_USER_REQUEST:
            return {
                user: action.payload
            }
        case UserTypes.NEW_USER_SUCCESS:
            return {
                user: action.payload
            }
        case UserTypes.NEW_USER_FAILURE:
            return {
                ...state
            }

// ---------------------------------------------------------------------------------

        case UserTypes.DELETE_USER_REQUEST:
            return {
                ...state
            }
        case UserTypes.DELETE_USER_SUCCESS:
            return {
                ...state
            }
        case UserTypes.DELETE_USER_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
};


export default reducerUser;