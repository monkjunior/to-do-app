import React, {Component} from 'react';
import firebase from '../Firebase';
import './FormTask.css';

class FormTask extends Component{
    constructor(props){
        super(props);
        this.ref = firebase.firestore().collection('tasks');
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }

    handleAdd = function(e){
        e.preventDefault();
        let name = document.getElementById('task-name').value;
        if (name !== ""){
            console.log("start");
            let detail = document.getElementById('task-detail').value;
            let taskTime = new Date();
            let id = taskTime.getTime();
            let time = `${taskTime.toLocaleDateString()}  |  ${taskTime.toLocaleTimeString()}` ;
            console.log(taskTime);
            this.ref.doc(id.toString()).set({
                id,
                name,
                detail,
                time,
            })
            .then((docRef)=>{
                console.log("Adding Document Successfully");
                document.getElementById('task-name').value = "";
                document.getElementById('task-detail').value = "";
            }
            )
            .catch((err)=>{
                console.log("Adding Error" + err);
            });
        }
    }

    handleDel = function(e){
        e.preventDefault();
        console.log("Handle Del");
    }

    render(){
        return(
            <form>
                <input type="text" placeholder="Task name" id="task-name" />
                <textarea name="" id="task-detail" cols="1" rows="2" placeholder="Detail ..."></textarea>
                <div className="button-wrapper">
                    <button type="submit" id="add-button" onClick={this.handleAdd}>Add</button>
                    <button type="submit" id="delete-button" onClick={this.handleDel}>Delete</button>
                </div>
            </form>
        )
    }
}

export default FormTask;