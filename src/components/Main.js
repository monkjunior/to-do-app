import React, {Component} from 'react';
import './Main.css';
import Activity from './Activity';
import ToDo from './ToDo';

class Main extends Component{
    render(){
        return(
            <div className="main">
                <ToDo/>
                <Activity/>
            </div>
        );
    }
    
}



export default Main;