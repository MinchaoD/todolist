import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Tasks } from './tasks'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      Tasks: Tasks,
    }),
    applyMiddleware(thunk, logger)
  )
  return store
}