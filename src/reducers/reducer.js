import {
  INCREMENT,
  HIDE,
  FETCH_DATA,
  SHOW_LOADER,
} from "./actions/hackerActionsTypes";

const initialState = {
  results: null,
  hide: "",
  showLoader: false,
};

const persistedDetails = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SHOW_LOADER:
      newState.showLoader = true;
      return newState;

    case HIDE:
      for (var i = state.results.length - 1; i >= 0; --i) {
        if (state.results[i].objectID == action.objId) {
          state.results.splice(i, 1);
        }
      }
      newState.hide = action.objId;
      newState.results = state.results;
      return newState;

    case INCREMENT:
      newState.showLoader = false;
      newState.results = action.value;
      return newState;

    case FETCH_DATA:
      newState.results = action.results;
      return newState;

    default:
      return state;
  }
};

export default persistedDetails;
