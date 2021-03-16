import { combineReducers } from "redux";
import reducerUser from "./usuarios/reducer";
import reducerBeer from "./beers/reducer";

const creatRootReducer = () =>
  combineReducers({
    reducerUser,
    reducerBeer,
  });

export default creatRootReducer;
