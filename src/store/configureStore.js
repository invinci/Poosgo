import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger';
import reducers from './combineReducers';
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native';

const loggerMiddleware = createLogger();
const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(loggerMiddleware);
}

export default function configureStore() {

  let store = createStore(reducers, applyMiddleware(...middlewares),autoRehydrate())
  persistStore(store,{storage:AsyncStorage,whitelist:['Login']});

  return store
}
