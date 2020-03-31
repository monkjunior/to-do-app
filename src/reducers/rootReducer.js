const initState = {
    todos: [
        {id: '', name: '', detail: '', time: ''},
        {id: '', name: '', detail: '', time: ''},
        {id: '', name: '', detail: '', time: ''},
        {id: '', name: '', detail: '', time: ''}
    ],
    done:[
        {id: '', name: '', detail: '', time: ''},
        {id: '', name: '', detail: '', time: ''},
        {id: '', name: '', detail: '', time: ''},
        {id: '', name: '', detail: '', time: ''},
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;