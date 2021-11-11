import { createStore , applyMiddleware, combineReducers, compose  } from "redux";
import thunk from "redux-thunk";
import { datafetchingReducer } from "./reducers/datafetchingReducer";
import { loadMoreReducer } from "./reducers/loadMoreReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const reducers = combineReducers({
    datafetchedResult : datafetchingReducer,
    loadMoreResult: loadMoreReducer
})
export const store = createStore(reducers ,  composeEnhancer (applyMiddleware(thunk)));
/* console.log('initialstate ' , store.getState())

 */
    
