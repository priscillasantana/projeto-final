import { call, put } from 'redux-saga/effects';
import beerService from '../../../services/beers-services';
import { loadBeerSuccess,
         loadBeerFailure,
         newBeerSuccess, 
         newBeerFailure, 
         deleteBeerSuccess,
         deleteBeerFailure} from './action';


export function* getBeers(): any {

    try {
        const response: any = yield call(beerService.getBeer)
        yield put(loadBeerSuccess(response.data))
    } catch (err) {
        console.log(err)
        yield put(loadBeerFailure())
    }
};


export function* newBeer(action: any): any {

    try{
        const response: any = yield call(beerService.newBeer, action.payload)
        yield put(newBeerSuccess(response.data))
    } catch (err) {
        console.log(err)
        yield put (newBeerFailure())
    }
};


export function* deleteBeer(action: any): any {

    try{
        yield call(beerService.deleteBeer, action.payload)
        yield put(deleteBeerSuccess())
    } catch (err) {
        console.log(err)
        yield put (deleteBeerFailure())
    }
};