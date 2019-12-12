import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./reducers"
const initialState = {};

const middleWare = [thunk];

const store = createStore(rootreducer, initialState, applyMiddleware(...middleWare));

export default store;