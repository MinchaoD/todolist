import * as ActionTypes from './ActionTypes'

export const TasksP = (state = {tasksP: []}, action) => {
  switch (action.type) {
    
    case ActionTypes.ADD_TASK_P:
      const taskP = action.payload
      taskP.id = state.tasksP.length
      return { ...state, tasksP: state.tasksP.concat(taskP) }
      
    case ActionTypes.DELETE_TASK_P:
      return {...state, tasksP: state.tasksP.filter(item => item.taskP !== action.payload)}
     
    default:
      return state
  }
}