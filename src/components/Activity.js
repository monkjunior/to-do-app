import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import DoneTask from './DoneTask';
import { firestore } from 'firebase';

function Activity(props){
    const tasks = props.done;
    const taskList = tasks.map(task => {
        return(
            <DoneTask name={task.name} detail={task.detail} time={task.time} id={task.id} key={task.id}/>
        )
    })
    return(
        <div className="activity">
            <div className="activity-title">Log</div>
            <span> Click to undone task | Double click to delete task</span>
            <ul className="donetask-wrapper">
                    <div className="task-wrapper-space">
                        {taskList.reverse()}
                    </div>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        done: state.firestore.ordered.done || state.tasks.done
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'done'}
    ])
)(Activity);