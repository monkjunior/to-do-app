import React, {Component} from 'react';
import firebase from '../Firebase';
import './Main.css';
import Activity from './Activity';
import ToDo from './ToDo';

class Main extends Component{
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('tasks');
        this.log = firebase.firestore().collection('done');
        this.unsubscribe = null;
        this.state = {
          tasks: [],
          done: []
        };
      }
    
    onToDoCollectionUpdate = (querySnapshot) => {
        const tasks = [];
        querySnapshot.forEach((task) => {
          const {name, detail, time, id } = task.data();
          console.log(task.data());
          console.log(name);
          tasks.push({
            id,
            task, // DocumentSnapshot
            detail,
            name,
            time,
          });
        });
        this.setState({
          tasks: tasks
        });
        console.log(this.state.tasks[0]);
    }

    onDoneCollectionUpdate = (querySnapshot) => {
      const tasks = [];
      querySnapshot.forEach((task) => {
        const {name, detail, time, id } = task.data();
        console.log(task.data());
        console.log(name);
        tasks.push({
          id,
          task, // DocumentSnapshot
          detail,
          name,
          time,
        });
      });
      this.setState({
        done: tasks
      });
      console.log(this.state.done[0]);
  }
    
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onToDoCollectionUpdate);
        this.unsubscribe = this.log.onSnapshot(this.onDoneCollectionUpdate);
    }

    render(){
        return(
            <div className="main">
                <ToDo tasks={this.state.tasks} />
                <Activity tasks={this.state.done}/>
            </div>
        );
    }
    
}

export default Main;