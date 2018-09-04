import React, { Component } from "react";
import { connect } from "react-redux";

import TodoAction from "../../actions/todos.js";

class TodoDetails extends Component {
    componentDidMount() {
        this.props.getTodoDetails(this.props.id);
    }
    render() {
        const { nodeDetail } = this.props;
        return (
            <div className="tododetails">
                <div className="tododetails-inner-item">
                    <span>Title: </span> {nodeDetail.title}
                </div>

                <div className="tododetails-inner-item">
                    <span>Description: </span> {nodeDetail.description}
                </div>

                <div className="tododetails-inner-item">
                    <span>Priority: </span> {nodeDetail.priority}
                </div>

                <div className="tododetails-inner-item">
                    <span>Tags: </span>
                    {nodeDetail.tags && nodeDetail.tags.map(v => `${v}, `)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    detailLoading: state.todos.detailLoading,
    nodeDetail: state.todos.nodeDetail
});

const mapDispatchToProps = dispatch => {
    return {
        getTodoDetails: state => dispatch(TodoAction.getTodoDetails(state))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoDetails);
