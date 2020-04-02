import React, {Component} from 'react';
import { connect } from 'react-redux';

class DoneTask extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleClick(e){
        let id = this.props.id.toString() ;
        this.props.makeUnDone(id);
    }

    handleButton(e) {
        let id = this.props.id.toString() ;
        this.props.deleteDoneTask(id);
    }

    render(){
        return(
            <li className="task" id={this.props.id} >
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
                    <div className="button-wrapper">
                        <button id="undone-button" onClick={this.handleClick}></button>
                        <button id="delete-button" onClick={this.handleButton}></button>
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
      deleteDoneTask: (id) => {
        dispatch({type: 'DELETE_DONE_TASK', id: id})
      },
      makeUnDone: (id) => {
        dispatch({type: 'MAKE_UNDONE', id: id})
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneTask)