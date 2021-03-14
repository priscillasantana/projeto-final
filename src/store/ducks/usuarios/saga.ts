import { call, put } from 'redux-saga/effects';
import usersService from '../../../services/users-services';
import { decodeToken } from 'react-jwt'
import * as UserAction from './action';


export function* getUsuarios(action: any): any {

    try {
        const response: any = yield call(usersService.loadUsuario, action.payload)
        yield put(UserAction.loadUserSuccess(response.data))
        yield localStorage.setItem('token', response.data.accessToken)

        const tokenDecoded = decodeToken(response.data.accessToken)
        const responseWithId: any = yield call(usersService.infoUsuario, tokenDecoded.sub)
        
        yield localStorage.setItem('userRole', responseWithId.data.role)
        yield localStorage.setItem('userName', responseWithId.data.name)

    } catch (err) {
        console.log(err)
        yield put(UserAction.loadUserFailure())
    }
};


export function* setUsuarios(): any {

    try {
        const response: any = yield call(usersService.getUsuario) 
        yield put(UserAction.getUserSuccess(response.data))
    } catch (err) {
        console.log(err)
        yield put(UserAction.getUserFailure())
    }
};


export function* newUsuarios(action: any): any {

    try {
        const response: any = yield call(usersService.newUsuario, action.payload)
        yield put(UserAction.newUserSuccess(response.data))
    } catch (err) {
        console.log(err)
        yield put(UserAction.newUserFailure())
    }
};


export function* deleteUsuario(action: any): any {

    try{
        yield call(usersService.deleteUsuario, action.payload)
        yield put(UserAction.deleteUserSuccess())
    } catch (err) {
        console.log(err)
        yield put (UserAction.deleteUserFailure())
    }
};

