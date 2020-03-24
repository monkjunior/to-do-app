import React from 'react';
import DoneTask from './DoneTask';

function Activity(props){
    const {tasks} = props;
    console.log("Done " + props);
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

export default Activity;