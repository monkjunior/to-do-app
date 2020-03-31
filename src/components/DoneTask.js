import React, {Component} from 'react';
import { connect } from 'react-redux';

class DoneTask extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleDblClick = this.handleDblClick.bind(this);
        this.delete = this.delete.bind(this);
        this.makeUnDone = this.makeUnDone.bind(this);
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
        this.props.deleteTask(id);
    }

    makeUnDone(id){
        this.props.makeUnDone(id);
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

const mapStateToProps = (state, ownProps) => {
    return ownProps;
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteTask: (id) => {
        dispatch({type: 'DELETE_DONE_TASK', id: id})
      },
      makeUnDone: (id) => {
        dispatch({type: 'MAKE_UNDONE', id: id})
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneTask)