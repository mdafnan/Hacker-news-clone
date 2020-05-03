import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import persistedDetails from "./reducer";

const rootReducer = combineReducers({
  persistedDetails,
});

export default rootReducer;
