const initState = {
    todos: [
        {id: '1', name: '1', detail: '1', time: '1'},
        {id: '2', name: '2', detail: '2', time: '2'},
        {id: '3', name: '3', detail: '3', time: '3'},
        {id: '4', name: '4', detail: '4', time: '4'}
    ],
    done:[
        {id: '5', name: '5', detail: '5', time: '5'},
        {id: '6', name: '6', detail: '6', time: '6'},
        {id: '7', name: '7', detail: '7', time: '7'},
        {id: '8', name: '8', detail: '8', time: '8'},
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    return state;
}

export default rootReducer;