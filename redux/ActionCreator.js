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

export const deleteTask = (task) => ({
  type: ActionTypes.DELETE_TASK,
  payload: task
});



export const postTaskP = (taskP) => dispatch => {
    const newTaskP = {
        taskP,
    };
   
    setTimeout(() => {
        dispatch(addTaskP(newTaskP));
    }, 2000); // 
};

export const addTaskP = taskP => ({
    type: ActionTypes.ADD_TASK_P,
    payload: taskP
});

export const deleteTaskP = (taskP) => ({
  type: ActionTypes.DELETE_TASK_P,
  payload: taskP
});
