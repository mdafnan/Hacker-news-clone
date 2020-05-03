import {
  INCREMENT,
  DECREASE,
  FETCH_DATA,
} from "../reducers/actions/authenticate_action_types";

const initialState = {
  value: 0,
  results: [
    {
      created_at: "",
      title: "",
      url: "",
      author: "",
      points: 0,
      story_text: null,
      comment_text: null,
      num_comments: 0,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 0,
      relevancy_score: 0,
    },
  ],
};

// Check user Timezoneregion and Timezoneabbvt once the user logs in
// Error should be thrown if the user does not have either region or abbvt associated as part of cookies

const persistedDetails = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case INCREMENT:
      newState.results.points = action.value + 1;
      console.log("reducer called ", newState.results.points);
      return newState;

    case FETCH_DATA:
      newState.results = action.results;

      return newState;

    default:
      return state;
  }
};

export default persistedDetails;
