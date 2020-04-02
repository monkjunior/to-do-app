export const createTaskAction = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore} ) => {
        // make asyn call to db
        const firestore = getFirestore();
        firestore.collection('tasks').doc(task.id).set({
            ...task,
        })
        .then(()=>{
            dispatch({
                type: 'CREATE_TASK',
                task: task
            })
        })
        .catch((err)=>{
            dispatch({
                type: 'CREATE_TASK_ERR',
                err: err
            })
        });
    }
}