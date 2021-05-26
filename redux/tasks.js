import * as ActionTypes from './ActionTypes'

export const Tasks = (state = {tasks: []}, action) => {
  switch (action.type) {
    
    case ActionTypes.ADD_TASK:
      const task = action.payload
      task.id = state.tasks.length
      return { ...state, tasks: state.tasks.concat(task) }
    // case ActionTypes.TOGGLE_COMPLETE:
    //   let updatedTodo = [...state.todo]
    //   updatedTodo[action.payload].complete = !updatedTodo[action.payload].complete
    //   return { ...state, todo: updatedTodo }
    // case ActionTypes.CLEAR_TASKS:
    //   return { ...state, todo: state.todo.filter((task) => !task.complete) }
    // case ActionTypes.DELETE_TASKS:
      
    //   return {...state, todo:[]}
    default:
      return state
  }
}