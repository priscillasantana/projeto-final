export enum UserTypes {
    LOAD_USER_REQUEST = 'LOAD_USER_REQUEST',
    LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS',
    LOAD_USER_FAILURE = 'LOAD_USER_FAILURE',
    
    GET_USER_REQUEST = 'GET_USER_REQUEST',
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    GET_USER_FAILURE = 'GET_USER_FAILURE',

    NEW_USER_REQUEST = 'NEW_USER_REQUEST',
    NEW_USER_SUCCESS = 'NEW_USER_SUCCESS',
    NEW_USER_FAILURE = 'NEW_USER_FAILURE',

    DELETE_USER_REQUEST = 'DELETE_USER_REQUEST',
    DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'

};

export interface UserState {
    user: User[]
};

export interface User {
    id: number,
    email: string,
    password: string,
    name?: string,
    role?: string
};