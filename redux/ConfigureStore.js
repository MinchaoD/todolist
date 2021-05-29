import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Tasks } from './tasks'
import { TasksP } from './tasksP'
import { persistStore, persistCombineReducers } from 'redux-persist'; // need to install redux-persist first
import storage from 'redux-persist/es/storage'; // in order to make persist store so we can save data on the client side, we need to

const config = {
  key: 'root',
  storage,
  debug: true
}
export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers( config, {
      Tasks: Tasks,
      TasksP: TasksP
    }),
    applyMiddleware(thunk, logger)
  );
  const persistor = persistStore(store);

  return { persistor, store};
}