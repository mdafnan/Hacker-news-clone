import { SAVE_ORG_DETAILS } from "../reducers/actions/authenticate_action_types";

const initialState = {
  orgName: "Organization List",
};

// Check user Timezoneregion and Timezoneabbvt once the user logs in
// Error should be thrown if the user does not have either region or abbvt associated as part of cookies

const persistedDetails = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SAVE_ORG_DETAILS:
      console.log("from reducer");
      newState.orgName = action.orgName;

      return newState;

    default:
      return state;
  }
};

export default persistedDetails;
