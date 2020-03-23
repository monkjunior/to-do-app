import React from 'react';
import Task from './Task';

function ToDo(props){
    const {tasks} = props;
    const taskList = tasks.map(task => {
        return(
            <Task name={task.name} detail={task.detail} time={task.time.seconds} key={task.key}/>
        )
    })
    return(
        <div className="to-do">
            <div className="to-do-title">To do list</div>
            <form>
                <input type="text" placeholder="Task name" />
                <textarea name="" id="" cols="1" rows="6" placeholder="Detail ..."></textarea>
                <div className="button-wrapper">
                    <button type="submit" id="add-button">Add</button>
                </div>
            </form>
            <ul className="task-wrapper">
                    <div className="task-wrapper-space">
                        {taskList}
                    </div>
                </ul>
        </div>
    )
}

export default ToDo;