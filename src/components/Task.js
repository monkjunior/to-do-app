import React, {Component} from 'react';
import firebase from '../Firebase';

class Task extends Component{
    constructor(props){
        super(props);
        this.ref = firebase.firestore().collection('tasks');
        this.log = firebase.firestore().collection('done');
        this.handleClick = this.handleClick.bind(this);
        this.handleDblClick = this.handleDblClick.bind(this);
        this.delete = this.delete.bind(this);
        this.makeDone = this.makeDone.bind(this);
    }

    handleClick(e){
        let id = e.currentTarget.id.toString() ;
        this.makeDone(id);
    }

    handleDblClick(e) {
        let id = e.currentTarget.id.toString() ;
        this.delete(id);
    }

    delete(id){
        this.ref.doc(id).delete()
        .then(() => {
            console.log("TASKS COLLECTION:Document successfully deleted!");
        })
        .catch((error) => {
            console.error("TASKS COLLECTION: Error in deleting document: ", error);
        });
    }

    makeDone(old_id){
        let task = this.ref.doc(old_id).get()
        .then((doc) => {
            if (doc.exists) {
                let {name, detail, time, id } = doc.data();
                let currentTime = new Date();
                id = currentTime.getTime().toString();
                time = `${currentTime.toLocaleDateString()}  |  ${currentTime.toLocaleTimeString()}` ;
                this.log.doc(id).set({
                    id,
                    name,
                    detail,
                    time,
                });
                console.log("TASKS COLLECTION --> DONE COLLECTION : Done", doc.data());
                this.delete(old_id);
            } else {
                // doc.data() will be undefined in this case
                console.log("TASKS COLLECTION --> DONE COLLECTION : Error");
            }
        })
        .catch((error)=>{
            console.error("TASKS COLLECTION: Error moving document: ", error);
        })
        ;
    }
    

    render(){
        return(
            <li className="task" id={this.props.id} onDoubleClick={this.handleDblClick} onClick={this.handleClick}>
                <div className="task-line">
                    <div className="task-line-node"></div>
                    <div className="task-line-tail"></div>
                </div>
                <div className="task-content">
                    <div className="task-name">
                        {this.props.name}
                    </div>

                    <div className="task-detail">
                        <p>{this.props.detail}</p>
                    </div>

                    <div className="task-time">
                        {this.props.time}
                    </div>
                </div>
            </li>
        )
    }
}

export default Task;