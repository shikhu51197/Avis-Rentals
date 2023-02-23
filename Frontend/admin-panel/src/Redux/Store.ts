import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import authReducer from "./Auth/auth.reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducers = combineReducers({
  AuthManager: authReducer,
});

const store = legacy_createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
