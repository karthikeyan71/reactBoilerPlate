import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import applicationData from './applicationData';
import showingAppsReducer from '../showingApps/showingAppsReducers';
import ReduxThunk from 'redux-thunk';

const languages = [
  "Kannada",
  "English",
  "Hindi",
  "Telugu",
  "Tamil",
  "Marathi",
  "Malayalam",
  "Punjabi",
  "Bengali",
  "Gujarati",
  "Assamese",
  "Rajasthani",
  "French",
  "Bhojpuri",
  "Arabic",
  "Ladakhi"
];

const initialData = { application: applicationData, languages :languages };

const data = (state = initialData, action) => {
  return state;
}

const combinedStore = combineReducers({
  applicationData: data,
  userData: showingAppsReducer
});

const store = createStore(combinedStore, applyMiddleware(ReduxThunk));

console.log(store.getState());

export default store;
