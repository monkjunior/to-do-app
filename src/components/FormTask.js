import React, {Component} from 'react';
import firebase from '../config/Firebase';
import { connect } from 'react-redux';
import { createTaskAction } from '../store/actions/createTaskAction';
import './FormTask.css';

class FormTask extends Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd = function(e){
        e.preventDefault();
        let name = document.getElementById('task-name').value;
        if (name !== ""){
            let detail = document.getElementById('task-detail').value;
            let taskTime = new Date();
            let id = taskTime.getTime().toString();
            let time = `${taskTime.toLocaleDateString()}  |  ${taskTime.toLocaleTimeString()}` ;
            this.props.createTask({
                id,
                name,
                detail,
                time,
            })
            console.log("Adding Document " + id + " Successfully");
            document.getElementById('task-name').value = "";
            document.getElementById('task-detail').value = "";
        }
    }

    render(){
        return(
            <form>
                <input type="text" placeholder="Task name" id="task-name" />
                <textarea name="" id="task-detail" cols="1" rows="2" placeholder="Detail ..."></textarea>
                <div className="button-wrapper">
                    <button type="submit" id="add-button" onClick={this.handleAdd}>Add</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        done: state.done,
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createTask: (task) => {
        dispatch(createTaskAction(task))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTask)