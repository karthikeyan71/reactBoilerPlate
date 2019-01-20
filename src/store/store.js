import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import applicationData from './applicationData';
import showingAppsReducer from '../showingApps/showingAppsReducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { middleware as reduxPackMiddleware } from 'redux-pack';

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

const logger = createLogger();

const initialData = { application: applicationData, languages :languages };

const data = (state = initialData, action) => {
  return state;
}

const combinedStore = combineReducers({
  applicationData: data,
  userData: showingAppsReducer
});

const store = createStore(combinedStore, applyMiddleware(thunk, reduxPackMiddleware, logger));

console.log(store.getState());

export default store;
