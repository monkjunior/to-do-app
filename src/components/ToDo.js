import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Task from './Task';
import FormTask from './FormTask';
import { firestore } from 'firebase';

function ToDo(props){
    const tasks = props.todos;
    const taskList = tasks.map(task => {
        return(
            <Task name={task.name} detail={task.detail} time={task.time} id={task.id} key={task.id}/>
        )
    })
    return(
        <div className="to-do">
            <div className="to-do-title">
                To do list
            </div>
            <span> Click to done task | Double click to delete task</span>
            <FormTask />
            <ul className="task-wrapper">
                    <div className="task-wrapper-space">
                        {taskList.reverse()}
                    </div>
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        todos: state.firestore.ordered.tasks || state.tasks.todos
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'tasks'}
    ])
)(ToDo);