import { Reducer } from "redux";
import { BeerState, BeerTypes } from "./types";

const initialStateBeer: BeerState = {
  beers: [],
};

const reducerBeer: Reducer = (state = initialStateBeer, action) => {
  switch (action.type) {
    case BeerTypes.GET_BEERS_REQUEST:
      return {
        beers: action.payload,
      };
    case BeerTypes.GET_BEERS_SUCCESS:
      return {
        beers: action.payload,
      };
    case BeerTypes.GET_BEERS_FAILURE:
      return {
        ...state,
      };

    // ---------------------------------------------------------------------------------

    case BeerTypes.NEW_BEER_REQUEST:
      return {
        beers: action.payload,
      };
    case BeerTypes.NEW_BEER_SUCCESS:
      return {
        beers: action.payload,
      };
    case BeerTypes.NEW_BEER_FAILURE:
      return {
        ...state,
      };

    // ---------------------------------------------------------------------------------

    case BeerTypes.DELETE_BEER_REQUEST:
      return {
        ...state,
      };
    case BeerTypes.DELETE_BEER_SUCCESS:
      return {
        ...state,
      };
    case BeerTypes.DELETE_BEER_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducerBeer;
