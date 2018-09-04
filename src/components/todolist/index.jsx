import React, { Component } from "react";
import ListItem from "./ListItem.jsx";
import { connect } from "react-redux";

import TodoAction from "../../actions/todos.js";

class TodoList extends Component {
    componentDidMount() {
        this.props.getAllNotes();
    }
    render() {
        const { nodeList } = this.props;
        return (
            <div className="todolist">
                {nodeList.map((v, i) => (
                    <ListItem item={v} key={i.toString()} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.todos.isLoading,
    nodeList: state.todos.nodeList
});

const mapDispatchToProps = dispatch => {
    return {
        getAllNotes: () => dispatch(TodoAction.getAllNotes())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
