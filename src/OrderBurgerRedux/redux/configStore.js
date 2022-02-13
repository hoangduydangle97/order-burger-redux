import { combineReducers, createStore } from "redux";
import OrderBurgerReducer from "./reducers/OrderBurgerReducer";

// root reducer
const rootReducer = combineReducers({ OrderBurgerReducer });

// create store
const store = createStore(rootReducer);

export default store;