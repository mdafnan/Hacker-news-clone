import * as hackerActionTypes from "./hackerActionsTypes";

const hackerActions = () => ({
  incrementAction: (value) => ({
    type: hackerActionTypes.INCREMENT,
    value,
  }),

  fetchData: (results) => ({
    type: hackerActionTypes.FETCH_DATA,
    results,
  }),

  hideAction: (objId) => ({
    type: hackerActionTypes.HIDE,
    objId,
  }),

  showLoader: () => ({
    type: hackerActionTypes.SHOW_LOADER,
  }),
});

export default hackerActions();
