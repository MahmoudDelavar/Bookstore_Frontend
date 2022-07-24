import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";
const store = legacy_createStore(reducers, applyMiddleware(thunk));
export default store;
