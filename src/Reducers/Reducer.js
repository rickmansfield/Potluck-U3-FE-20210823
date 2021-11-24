import {
  API_ACTION_START,
  API_ACTION_FAIL,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
} from "../Actions/actions";

export const initialState = {
  user: {
    username: "",
    name: "",
    password: "",
    isOrganizer: false,
  },
  eventDetails: {
    date: "",
    time: "",
    location: "",
  },
  items: {
    food: [],
    drink: [],
  },
  isLoading: false,
  error: "",
  success: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_ACTION_START:
      return {
        ...state,
        isLoading: true,
        error: "",
        success: "",
      };
    case API_ACTION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        password: "",
        isLoading: false,
        success: "User Login Successful",
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        username: "",
        name: "",
        password: "",
        error: "",
        success: "User Registered",
      };
    default:
      return state;
  }
};

export default reducer;
