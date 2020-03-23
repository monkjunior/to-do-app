import React, {Component} from 'react';
import './Main.css';

function Main(props){
    const {tasks} = props;
    const taskList = tasks.map(task => {
        return(
            <div className="task" key={task.key}>
                <p>Name: {task.name}</p>
                <p>Detail: {task.detail}</p>
                <p>Time: {task.time.seconds}</p>
                <br></br>
            </div>
        )
    })
    return(
        <div className="main">
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
                        <li className="task">
                            <div className="task-line">
                                <div className="task-line-node"></div>
                                <div className="task-line-tail"></div>
                            </div>
                            <div className="task-content">
                                <div className="task-name">Create to-do app</div>
                                <div className="task-detail">
                                    <p>Style your app bases on CTF Viblo</p>
                                    <p>Use React</p>
                                    <p>Deploy to github.io</p>
                                </div>
                                <div className="task-time">
                                    <script>
                                        date = new Date();
                                        document.getElementsByClassName('task-time')[0].innerText = date.toLocaleTimeString() ;
                                    </script>
                                </div>
                            </div>
                        </li>
                        <li className="task">
                            <div className="task-line">
                                <div className="task-line-node"></div>
                                <div className="task-line-tail"></div>
                            </div>
                            <div className="task-content">
                                <div className="task-name">Create to-do app</div>
                                <div className="task-detail">
                                    <p>Style your app bases on CTF Viblo</p>
                                    <p>Use React</p>
                                    <p>Deploy to github.io</p>
                                </div>
                                <div className="task-time">
                                    <script>
                                        date = new Date();
                                        document.getElementsByClassName('task-time')[1].innerText = date.toLocaleTimeString() ;
                                    </script>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="activity">
                <div className="activity-title">Activity</div>
            </div>
        </div>
    );
}

export default Main;