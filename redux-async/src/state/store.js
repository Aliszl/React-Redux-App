import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import postReducer from "./reducers";
import {monsterReducer} from "./monsterReducer"


const initialState = {};

const middleWare = [thunk];

const store = createStore(monsterReducer, initialState, applyMiddleware(...middleWare));

export default store;