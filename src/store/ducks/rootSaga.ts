import { all, takeLatest } from 'redux-saga/effects';
import { deleteBeer, getBeers, newBeer } from './beers/saga';
import { BeerTypes } from './beers/types';
import { deleteUsuario, getUsuarios, newUsuarios, setUsuarios } from './usuarios/saga';
import { UserTypes } from './usuarios/types';


export default function* rootSaga(): any{
    return yield all([
        takeLatest(UserTypes.LOAD_USER_REQUEST, getUsuarios),
        takeLatest(UserTypes.GET_USER_REQUEST, setUsuarios),
        takeLatest(UserTypes.NEW_USER_REQUEST, newUsuarios),
        takeLatest(UserTypes.DELETE_USER_REQUEST, deleteUsuario),
        takeLatest(BeerTypes.GET_BEERS_REQUEST, getBeers),
        takeLatest(BeerTypes.NEW_BEER_REQUEST, newBeer),
        takeLatest(BeerTypes.DELETE_BEER_REQUEST, deleteBeer),
    ])
};