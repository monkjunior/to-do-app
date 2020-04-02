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
    switch (action.type){
        case 'MAKE_DONE':
            console.log('MAKE_DONE');
            let doneTask;
            let newTodos1 = state.todos.filter(task => {
                if(action.id === task.id){
                    doneTask = task;
                }
                return action.id !== task.id;
            });
            let newDone1 = state.done;
            newDone1.push(doneTask);
            return {
                todos: newTodos1,
                done: newDone1
            }
        case 'MAKE_UNDONE':
            console.log('MAKE_UNDONE');
            let undoneTask;
            let newDone2 = state.done.filter(task => {
                if(action.id === task.id){
                    undoneTask = task;
                }
                return action.id !== task.id;
            });
            let newTodos2 = state.todos;
            newTodos2.push(undoneTask);
            return {
                todos: newTodos2,
                done: newDone2
            }
        case 'DELETE_TASK':
            console.log('DELETE_TASK');
            let newTodos = state.todos.filter(task => {
                return action.id !== task.id;
            });
            return {
                ...state,
                todos: newTodos
            }
        case 'DELETE_DONE_TASK':
            console.log('DELETE_DONE_TASK');
            let newDone = state.done.filter(task => {
                return action.id !== task.id;
            });
            return {
                ...state,
                done: newDone
            }
        default:
            break;
    }
    return state;
}

export default rootReducer;