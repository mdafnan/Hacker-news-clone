import * as authenticateActionTypes from "./authenticate_action_types";

const authenticateActions = () => ({
  incrementAction: (value) => ({
    type: authenticateActionTypes.INCREMENT,
    value,
  }),

  fetchData: (results) => ({
    type: authenticateActionTypes.FETCH_DATA,
    results,
  }),
});

export default authenticateActions();
