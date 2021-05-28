import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Tasks } from './tasks'
import { persistStore, persistCombineReducers } from 'redux-persist'; // need to install redux-persist first
import storage from 'redux-persist/es/storage'; // in order to make persist store so we can save data on the client side, we need to


const config = {
  key: 'root',  // this is to connect App.js, root
  storage,
  debug: true  // this means turn on the debug logging
}

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers( config, {
      Tasks: Tasks,
    }),
    applyMiddleware(thunk, logger)
  )
  const persistor = persistStore(store);

  return { persistor, store };
}