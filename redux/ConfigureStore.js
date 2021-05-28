import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Tasks } from './tasks'
import { TasksP } from './tasksP'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      Tasks: Tasks,
      TasksP: TasksP
    }),
    applyMiddleware(thunk, logger)
  )
  return store
}