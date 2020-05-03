import { combineReducers } from "redux";
// import { routerReducer } from "react-router-redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import persistedReducer from "./persistedReducer";

const rootReducer = combineReducers({
  //router: routerReducer,
  persistedReducer,
});

export default rootReducer;
