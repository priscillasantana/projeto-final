import { action } from 'typesafe-actions';
import { BeerTypes } from './types';


export const loadBeerRequest = () => action(BeerTypes.GET_BEERS_REQUEST);

export const loadBeerSuccess = (payload: any) => action(BeerTypes.GET_BEERS_SUCCESS, payload);

export const loadBeerFailure = () => action(BeerTypes.GET_BEERS_FAILURE);

// ---------------------------------------------------------------------------------

export const newBeerRequest = (beer: any) => action(BeerTypes.NEW_BEER_REQUEST, beer);

export const newBeerSuccess = (payload: any) => action(BeerTypes.NEW_BEER_SUCCESS, payload);

export const newBeerFailure = () => action(BeerTypes.NEW_BEER_FAILURE);

// ---------------------------------------------------------------------------------

export const deleteBeerRequest = (id: any) => action(BeerTypes.DELETE_BEER_REQUEST, id);

export const deleteBeerSuccess = () => action(BeerTypes.DELETE_BEER_SUCCESS);

export const deleteBeerFailure = () => action(BeerTypes.DELETE_BEER_REQUEST);