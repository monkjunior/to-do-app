import React, {Component} from 'react';
import firebase from './Firebase';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('tasks');
    this.unsubscribe = null;
    this.state = {
      tasks: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const tasks = [];
    querySnapshot.forEach((task) => {
      const { detail, name, time } = task.data();
      tasks.push({
        key: task.id,
        task, // DocumentSnapshot
        detail,
        name,
        time,
      });
      console.log(task.data());
      console.log(tasks);
    });
    this.setState({
      tasks: tasks
    });
    console.log(this.state);
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render(){
    console.log(this.state);
    return (
      <div className="App">
        <Main tasks={this.state.tasks} />
      </div>
    );
  }
    
}

export default App;
