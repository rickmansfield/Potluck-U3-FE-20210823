export const USER_EVENT_START = 'USER_EVENT_START';
export const USER_EVENT_SUCCESS = 'USER_EVENT_SUCCESS';
export const USER_EVENT_ERROR = 'USER_EVENT_ERROR';

const initialState = {
  user: {},
  loading: false,
  error: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_EVENT_START:
      return {
      ...state,
        loading: true,
        
      };
    case USER_EVENT_SUCCESS:
      console.log(action.payload);
      return {
        user: action.payload,
        loading: false,
        error: '',
      };
    case USER_EVENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
