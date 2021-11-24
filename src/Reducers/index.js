
import { combineReducers } from 'redux';

import { eventsReducer } from './eventsReducer';
import { userReducer } from './userReducer';
import { LoginReducer } from "./LoginReducer";

export const rootReducer = combineReducers({
  eventsReducer,
  LoginReducer,
  userReducer,

});
