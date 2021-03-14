import { call, put } from 'redux-saga/effects';
import usersService from '../../../services/users-services';
import { decodeToken } from 'react-jwt'
import { deleteUserFailure, deleteUserSuccess, getUserFailure,
        getUserSuccess,
        loadUserFailure,
        loadUserSuccess,
        newUserFailure,
        newUserSuccess } from './action';


export function* getUsuarios(action: any): any {

    try {
        const response: any = yield call(usersService.loadUsuario, action.payload)
        yield put(loadUserSuccess(response.data))
        yield localStorage.setItem('token', response.data.accessToken)

        const tokenDecoded = decodeToken(response.data.accessToken)
        const responseWithId: any = yield call(usersService.infoUsuario, tokenDecoded.sub)
        
        yield localStorage.setItem('userRole', responseWithId.data.role)
        yield localStorage.setItem('userName', responseWithId.data.name)

    } catch (err) {
        console.log(err)
        yield put(loadUserFailure())
    }
};


export function* setUsuarios(): any {

    try {
        const response: any = yield call(usersService.getUsuario) 
        yield put(getUserSuccess(response.data))
    } catch (err) {
        console.log(err)
        yield put(getUserFailure())
    }
};


export function* newUsuarios(action: any): any {

    try {
        const response: any = yield call(usersService.newUsuario, action.payload)
        yield put(newUserSuccess(response.data))
    } catch (err) {
        console.log(err)
        yield put(newUserFailure())
    }
};


export function* deleteUsuario(action: any): any {

    try{
        yield call(usersService.deleteUsuario, action.payload)
        yield put(deleteUserSuccess())
    } catch (err) {
        console.log(err)
        yield put (deleteUserFailure())
    }
};

