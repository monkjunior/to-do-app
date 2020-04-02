export const makeDoneAction = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore} ) => {
        // make asyn call to db
        const firestore = getFirestore();
        firestore.collection('projects').doc(id).set({
            id: id,
            content: "redux-firebase"
        })
        .then(()=>{
            dispatch({
                type: 'MAKE_DONE',
                id: id
            })
        })
        .catch((err)=>{
            dispatch({
                type: 'MAKE_DONE_ERR',
                id: err
            })
        });
    }
}

export const createTaskAction = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore} ) => {
        // make asyn call to db
        const firestore = getFirestore();
        firestore.collection('projects').doc(task.id).set({
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