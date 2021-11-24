export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const ADD_EVENT_START = 'ADD_EVENT_START';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_ERROR = 'ADD_EVENT_ERROR';
export const ADD_ITEM_START = 'ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_ERROR = 'ADD_ITEM_ERROR';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_GUEST_START = 'ADD_GUEST_START';
export const ADD_GUEST_SUCCESS = 'ADD_GUEST_SUCCESS';
export const ADD_GUEST_ERROR = 'ADD_GUEST_ERROR';
export const DELETE_GUEST = 'DELETE_GUEST';
export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const DELETE_EVENT = 'DELETE_EVENT';
export const SET_CURRENT_EVENT = 'SET_CURRENT_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';
export const EDIT_EVENT_SUCCESS = 'EDIT_EVENT_SUCCESS';
export const EVENT_DATA_START = 'EVENT_DATA_START';
export const EVENT_DATA_SUCCESS = 'EVENT_DATA_SUCCESS';
export const EVENT_DATA_ERROR = 'EVENT_DATA_ERROR';
export const RSVP_ADD_ITEM = 'RSVP_ADD_ITEM';

const initialState = {
  events: [],
  currentEvent: '',
  currentEventID: '',
  currentUser: 0,
  loading: false,
  error: '',
  editing: false,
  editEvent: false,
  rsvpEvent: '',
  rsvpAddItem: [],
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SET_CURRENT_EVENT:
      return {
        ...state,
        currentEvent: state.events.filter(event => event.id === action.payload),
        events: state.events.filter(event => event.id !== action.payload),
        // editEvent: false,
      };
    case FETCH_DATA_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        events: action.payload.filter(
          event => event.user_id === state.currentUser
        ),
        loading: false,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
      };
    case ADD_EVENT_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ADD_EVENT_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        events: [...state.events, action.payload],
        currentEvent: action.payload,
        loading: false,
        editEvent: false,
      };
    case EDIT_EVENT_SUCCESS:
      return {
        ...state,
        events: [...state.events, action.payload],
        currentEvent: action.payload,
        loading: false,
        editEvent: false,
        editing: false,
      };
    case ADD_EVENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_ITEM_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        events: state.events.map(event => {
          //   console.log(event);
          if (event.event_id === action.payload.event_id) {
            delete action.payload.event_id;
            return {
              ...event,
              menu_items: [...event.menu_items, action.payload],
            };
          } else {
            return {
              ...event,
            };
          }
        }),
        currentEvent: {
          ...state.currentEvent,
          menu_items: [...state.currentEvent.menu_items, action.payload],
        },
        loading: false,
        error: '',
      };
    case ADD_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_ITEM:
      console.log(state.currentEvent)
      return {
        ...state,
        events: state.events.map(event => {
          if (event.event_id === state.currentEvent.id) {
            return {
              ...event,
              menu_items: event.menu_items.filter(
                item => item.id !== action.payload
              ),
            };
          } else {
            return {
              ...event,

            };
          }
        }),
        
        currentEvent: {
        menu_items: state.currentEvent.menu_items.filter(
            item => ( item.id !== action.payload.food_id
            )
          ),
        },
      };
    case EDIT_EVENT:
      return {
        ...state,
        currentEventID: action.payload,
        editEvent: true,
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload),
      };
    case ADD_GUEST_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ADD_GUEST_SUCCESS:
      return {
        ...state,
        events: state.events.map(event => {
          //   console.log(event);
          if (event.event_id === action.payload.event_id) {
            delete action.payload.event_id;
            return {
              ...event,
              guests: [...event.guests, action.payload],
            };
          } else {
            return {
              ...event,
            };
          }
        }),
        currentEvent: {
          ...state.currentEvent,
          guests: [...state.currentEvent.guests, action.payload],
        },
        loading: false,
        error: '',
      };
    case ADD_GUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_GUEST:
      return {
        ...state,
        events: state.events.map(event => {
          if (event.event_id === state.currentEvent.id) {
            return {
              ...event,
              guests: event.guests.filter(item => item.id !== action.payload),
            };
          } else {
            return {
              ...event,
            };
          }
        }),
        currentEvent: {
          ...state.currentEvent,
          guests: state.currentEvent.guests.filter(
            item => item.id !== action.payload
          ),
        },
      };
    case TOGGLE_EDITING:
      return {
        ...state,
        currentEvent: '',
        editing: !state.editing,
      };
    case EVENT_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case EVENT_DATA_SUCCESS:
      return {
        ...state,
        rsvpEvent: action.payload,
        loading: false,
      };
    case EVENT_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RSVP_ADD_ITEM:
      return {
        ...state,
        events: state.events.map(event => {
          if (event.event_id === action.payload.event_id) {
            return {
              ...event,
              menu_items: event.menu_items.map(item => {
                if (item.id === action.payload.id) {
                  return {
                    ...item,
                    guest_id: state.currentUser,
                  };
                } else {
                  return {
                    ...item,
                  };
                }
              }),
            };
          } else {
            return {
              ...event,
            };
          }
        }),
        rsvpAddItem: [...state.rsvpAddItem, action.payload],
      };
    default:
      return state;
  }
};
