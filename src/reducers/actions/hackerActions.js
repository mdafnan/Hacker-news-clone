import * as hackerActionTypes from "./hackerActionsTypes";

const hackerActions = () => ({
  incrementAction: (value, rowId) => ({
    type: hackerActionTypes.INCREMENT,
    value,
    rowId,
  }),

  fetchData: (results) => ({
    type: hackerActionTypes.FETCH_DATA,
    results,
  }),

  hideAction: (results) => ({
    type: hackerActionTypes.HIDE,
    results,
  }),
});

export default hackerActions();
