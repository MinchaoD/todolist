import * as ActionTypes from './ActionTypes'

export const postTask = (task) => dispatch => {
    const newTask = {
        task,
    };
   
    setTimeout(() => {
        dispatch(addTask(newTask));
    }, 2000); // 
};

export const addTask = task => ({
    type: ActionTypes.ADD_TASK,
    payload: task
});



// export const clearAllTasks = () => ({
//   type: ActionTypes.CLEAR_TASKS,
// })

export const deleteTask = (task) => ({
  type: ActionTypes.DELETE_TASK,
  payload: task
});
