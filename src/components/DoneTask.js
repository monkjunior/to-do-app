import React, {Component} from 'react';
import firebase from '../Firebase';

class DoneTask extends Component {
    constructor(props){
        super(props);
        this.ref = firebase.firestore().collection('tasks');
        this.log = firebase.firestore().collection('done');
        this.handleClick = this.handleClick.bind(this);
        this.handleDblClick = this.handleDblClick.bind(this);
        this.delete = this.delete.bind(this);
    }

    handleClick(e){
        let id = e.currentTarget.id.toString() ;
        this.makeUnDone(id);
    }

    handleDblClick(e) {
        let id = e.currentTarget.id.toString() ;
        this.delete(id);
    }

    delete(id){
        this.log.doc(id).delete()
        .then(() => {
            console.log("DONE COLLECTION: Document successfully deleted!");
        })
        .catch((error) => {
            console.error("DONE COLLECTION: Error in deleting document: ", error);
        });
    }

    makeUnDone(old_id){
        let task = this.log.doc(old_id).get()
        .then((doc) => {
            if (doc.exists) {
                let {name, detail, time, id } = doc.data();
                let currentTime = new Date();
                id = currentTime.getTime().toString();
                time = `${currentTime.toLocaleDateString()}  |  ${currentTime.toLocaleTimeString()}` ;
                this.ref.doc(id).set({
                    id,
                    name,
                    detail,
                    time,
                });
                console.log("DONE COLLECTION  --> TASKS COLLECTION : UnDone", doc.data());
                this.delete(old_id);
            } else {
                // doc.data() will be undefined in this case
                console.log("DONE COLLECTION  --> TASKS COLLECTION : Error");
            }
        })
        .catch((error)=>{
            console.error("DONE COLLECTION: Error moving document: ", error);
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

export default DoneTask;