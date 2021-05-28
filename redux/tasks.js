import * as ActionTypes from './ActionTypes'

export const Tasks = (state = {tasks: []}, action) => {
  switch (action.type) {
    
    case ActionTypes.ADD_TASK:
      const task = action.payload
      task.id = state.tasks.length
      return { ...state, tasks: state.tasks.concat(task) }
      
    case ActionTypes.DELETE_TASK:
      
      return state.filter(task => task != action.payload)
    default:
      return state
  }
}