import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistedDetails from "../reducers/reducer";
import rootReducer from "../reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage,

  whitelist: ["addReducer"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
  const store = createStore(persistedReducer, initialState);

  const persistor = persistStore(store);

  return { store, persistor };
}
