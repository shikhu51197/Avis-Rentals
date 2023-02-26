import {applyMiddleware,combineReducers,compose,legacy_createStore} from "redux" 

import { reducer as GlobalReducer } from "./CarRentals/reducer"
import { reducer as authReducer } from "./Auth/reducer"
import thunk from "redux-thunk"

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

 const rootReducer = combineReducers({
    GlobalReducer,
    authReducer,
  });

export const store=legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))