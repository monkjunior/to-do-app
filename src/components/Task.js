import React from 'react';

function Task(props){
    return(
        <li className="task">
            <div className="task-line">
                <div className="task-line-node"></div>
                <div className="task-line-tail"></div>
            </div>
            <div className="task-content">
                <div className="task-name">
                    {props.name}
                </div>

                <div className="task-detail">
                    <p>{props.detail}</p>
                </div>

                <div className="task-time">
                    {props.time}
                </div>
            </div>
        </li>
    )
}

export default Task;