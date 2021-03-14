import { action } from 'typesafe-actions';
import { UserTypes } from './types';


export const loadUserRequest = (login: any) => action(UserTypes.LOAD_USER_REQUEST, login);

export const loadUserSuccess = (payload: any) => action(UserTypes.LOAD_USER_SUCCESS, payload);

export const loadUserFailure = () => action(UserTypes.LOAD_USER_FAILURE);

// ---------------------------------------------------------------------------------

export const getUserRequest = () => action(UserTypes.GET_USER_REQUEST);

export const getUserSuccess = (payload: any) => action(UserTypes.GET_USER_SUCCESS, payload);

export const getUserFailure = () => action(UserTypes.GET_USER_FAILURE);

// ---------------------------------------------------------------------------------

export const newUserRequest = (user: any) => action(UserTypes.NEW_USER_REQUEST, user);

export const newUserSuccess = (payload: any) => action(UserTypes.NEW_USER_SUCCESS, payload);

export const newUserFailure = () => action(UserTypes.NEW_USER_FAILURE);

// ---------------------------------------------------------------------------------

export const deleteUserRequest = (id: any) => action(UserTypes.DELETE_USER_REQUEST, id);

export const deleteUserSuccess = () => action(UserTypes.DELETE_USER_SUCCESS);

export const deleteUserFailure = () => action(UserTypes.DELETE_USER_FAILURE);






