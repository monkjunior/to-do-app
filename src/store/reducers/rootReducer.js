import { combineReducers } from 'redux'; 
import { firestoreReducer } from 'redux-firestore';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    firestore: firestoreReducer
});

export default rootReducer;