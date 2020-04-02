export const makeDoneAction = (old_id) => {
    return (dispatch, getState, { getFirebase, getFirestore} ) => {
        // make asyn call to db
        const firestore = getFirestore();
        firestore.collection('tasks').doc(old_id).get()
        .then((doc) => {
            if (doc.exists) {
                let {name, detail, time, id } = doc.data();
                let currentTime = new Date();
                id = currentTime.getTime().toString();
                time = `${currentTime.toLocaleDateString()}  |  ${currentTime.toLocaleTimeString()}` ;
                firestore.collection('done').doc(id).set({
                    id,
                    name,
                    detail,
                    time,
                });
                firestore.collection('tasks').doc(old_id).delete()
                .then(() => {
                    dispatch({
                        type: 'MAKE_DONE',
                        id: id
                    })
                })
                .catch((err) => {
                    dispatch({
                        type: 'MAKE_DONE_ERR',
                        err: err
                    })
                });
            }
            else{
                dispatch({
                    type: 'MAKE_DONE_ERR',
                    err: 'NULL ERR'
                })
            }
        })
        .catch((err)=>{
            dispatch({
                type: 'MAKE_DONE_ERR',
                err: err
            })
        });
    }
}