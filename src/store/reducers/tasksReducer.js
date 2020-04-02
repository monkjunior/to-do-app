const initState = {
    todos: [],
    done:[]
}

const tasksReducer = (state = initState, action) => {
    let newTodos;
    let newDone;
    switch (action.type){
        case 'MAKE_DONE':
            console.log('MAKE_DONE');
            return state;
        case 'MAKE_DONE_ERR':
            console.log('MAKE_DONE_ERROR ' + action.err);
            return state;
        case 'MAKE_UNDONE':
            console.log('MAKE_DONE');
            return state;
        case 'MAKE_UNDONE_ERR':
            console.log('MAKE_DONE_ERROR ' + action.err);
            return state;
        case 'DELETE_TASK':
            console.log('DELETE_TASK');
            return state;
        case 'DELETE_TASK_ERR':
            console.log('DELETE_TASK_ERR ' + action.err);
            return state;
        case 'CREATE_TASK':
            newTodos = state.todos;
            newTodos.push(action.task);
            console.log('CREATE_TASK');
            console.log(newTodos);
            return {
                ...state,
                todos: newTodos
            }
        case 'CREATE_TASK_ERR':
            console.log('CREATE_TASK_ERR ' + action.err);
            return state;
        default:
            return state;
    }
    return state;
}

export default tasksReducer;