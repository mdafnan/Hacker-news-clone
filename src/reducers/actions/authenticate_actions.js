import * as authenticateActionTypes from "./authenticate_action_types";

const authenticateActions = () => ({
  setOrgInfo: (orgName) => ({
    type: authenticateActionTypes.SAVE_ORG_DETAILS,
    orgName: orgName.replace(/[+]/g, " "),
  }),

  //   resetSelectedOrgDetails: () => ({
  //     type: authenticateActionTypes.RESET_SELECTED_ORG,
  //   }),

  //   setPrivilegesInfo: privileges => ({
  //     type: authenticateActionTypes.SET_USER_PRIVILEGE,
  //     privileges,
  //   }),

  //   getEventIdFromPersisted: event_id => ({
  //     type: authenticateActionTypes.SET_EVENT_ID_FOR_SESSIONS,
  //     event_id,
  //   }),
});

export default authenticateActions();
