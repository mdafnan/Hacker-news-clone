import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistedDetails from "../reducers/reducer";
// import rootReducer from "../reducers/reducer";

// const persistConfig = {
//   key: "root",
//   storage,

//   whitelist: ["addReducer"],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default function configureStore(initialState) {
//   const store = createStore(persistedReducer, initialState);

//   const persistor = persistStore(store);

//   return { store, persistor };
// }

function configureStore(initialState = {}) {
  const reducer = combineReducers({
    auth: () => ({ mock: true }),
    form: persistReducer(
      {
        key: "form", // key for localStorage key, will be: "persist:form"
        storage,
        debug: true,
        blacklist: ["foo"],
      },
      persistedDetails
    ),
  });

  const store = createStore(
    persistReducer(
      {
        key: "root",
        debug: true,
        storage,
        whitelist: ["auth"],
      },
      reducer
    ),
    initialState
  );

  const persistor = persistStore(store, null, () => {
    // if you want to get restoredState
  });

  return { store, persistor };
}

export default configureStore;
