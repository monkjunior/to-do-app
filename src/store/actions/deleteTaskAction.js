export const deleteTaskAction = (id, collection) => {
    return (dispatch, getState, { getFirebase, getFirestore} ) => {
        // make asyn call to db
        const firestore = getFirestore();
        firestore.collection(collection).doc(id).delete()
        .then(()=>{
            dispatch({
                type: 'DELETE_TASK',
                id: id
            })
        })
        .catch((err)=>{
            dispatch({
                type: 'DELETE_TASK_ERR',
                err: err
            })
        });
    }
}