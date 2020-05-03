import { INCREMENT, HIDE, FETCH_DATA } from "./actions/hackerActionsTypes";

const initialState = {
  value: 0,
  results: null,
  //hide: "initial",
};

const persistedDetails = (state = initialState, action) => {
  // console.log("111111111111", action.results);
  //const newState = Object.assign({}, state);

  switch (action.type) {
    case HIDE:
      return {
        ...state,
        text: action.results,
      };

    case INCREMENT:
      console.log("state.results", state.results);
      console.log("action", action);
      let a = action.value;
      let b = action.rowId;
      let c = state.results;
      //   var data1 = state.results.map((item, b) => {
      //     console.log("inside map", item.objectID);

      //     if (item["objectID"] == b) {
      //       item["points"] = item["points"] + 1;
      //     }
      //   });
      // console.log("data1", data1)
      return {
        ...state,
        value: action.value + 1,
      };

    case FETCH_DATA:
      return {
        ...state,
        results: action.results,
      };

    default:
      return state;
  }
};

export default persistedDetails;
