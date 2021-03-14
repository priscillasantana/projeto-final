export enum BeerTypes {
    GET_BEERS_REQUEST = 'GET_BEERS_REQUEST',
    GET_BEERS_SUCCESS = 'GET_BEERS_SUCCESS',
    GET_BEERS_FAILURE = 'GET_BEERS_FAILURE',

    NEW_BEER_REQUEST = 'NEW_BEER_REQUEST',
    NEW_BEER_SUCCESS = 'NEW_BEER_SUCCESS',
    NEW_BEER_FAILURE = 'NEW_BEER_FAILURE',

    DELETE_BEER_REQUEST = 'DELETE_BEER_REQUEST',
    DELETE_BEER_SUCCESS = 'DELETE_BEER_SUCCESS',
    DELETE_BEER_FAILURE = 'DELETE_BEER_FAILURE',
};

export interface BeerState {
    beers: Beer[]
}

export interface Beer {
    id: string,
    title: string,
    image: string,
    price: string,
    description: string
}