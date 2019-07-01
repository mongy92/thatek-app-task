import { createStore, applyMiddleware, combineReducers } from "redux";
import Logger from "redux-logger";
import Thunk from "redux-thunk";
import TestReducer from "./reducers/TestReducer";


const reducers = combineReducers({
    test: TestReducer
});

const middleware = applyMiddleware(Thunk);

export default createStore(reducers, {}, middleware);



