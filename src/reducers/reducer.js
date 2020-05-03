import { INCREMENT, HIDE, FETCH_DATA } from "./actions/hackerActionsTypes";

const initialState = {
  value: 0,
  results: null,
  hide: "initial",
};

const persistedDetails = (state = initialState, action) => {
  // console.log("111111111111", action.results);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case HIDE:
      newState.hide = action.results;
      return newState;

    case INCREMENT:
      console.log("state.results", state.results);
      console.log("action", action);
      let newVar = newState.results;
      newState.results = [];
      Object.assign(
        newVar.map((item) => {
          if (item.objectID === action.rowId) {
            item.points = action.value + 1;
          }
        })
      );
      newState.results = newVar;
      return newState;

    case FETCH_DATA:
      newState.results = action.results;
      return newState;

    default:
      return state;
  }
};

export default persistedDetails;
