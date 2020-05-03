import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers/rootReducers";

//export const history = createHistory();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["persistedDetails"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}) {
  const store = createStore(persistedReducer, initialState);

  const persistor = persistStore(store);
  return { store, persistor };
}
