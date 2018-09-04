import React, { Component } from "react";
import ListItem from "./ListItem.jsx";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Spinner from "../Spinner.jsx";
import TodoAction from "../../actions/todos.js";
import TodoDetails from "./TodoDetails.jsx";

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            showSubCategory: false,
            categoryIndex: -1
        };
    }
    componentDidMount() {
        this.props.getAllNotes();
    }
    updateIndex = index => {
        const { categoryIndex, showSubCategory } = this.state;
        if (showSubCategory && categoryIndex === index) {
            this.setState({
                showSubCategory: !showSubCategory,
                categoryIndex: -1
            });
        } else {
            this.setState({
                showSubCategory: true,
                categoryIndex: Number(index)
            });
        }
    };
    render() {
        const { nodeList, isLoading, detailLoading, updateTodo } = this.props;
        const { showSubCategory, categoryIndex } = this.state;
        return (
            <div className="todolist">
                {nodeList && nodeList.length ? (
                    nodeList.map((v, index) => (
                        <ListItem
                            todo={v}
                            key={index.toString()}
                            index={index}
                            showSubCategory={showSubCategory}
                            categoryIndex={categoryIndex}
                            updateTodo={this.props.updateTodo}
                            updateIndex={this.updateIndex}
                        />
                    ))
                ) : (
                    <Spinner />
                )}
                {detailLoading ? <Spinner /> : null}
            </div>
        );
    }
}
TodoList.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    nodeList: PropTypes.array.isRequired,
    detailLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    detailLoading: state.todos.detailLoading,
    isLoading: state.todos.isLoading,
    nodeList: state.todos.nodeList
});

const mapDispatchToProps = dispatch => {
    return {
        getAllNotes: () => dispatch(TodoAction.getAllNotes()),
        updateTodo: todo => dispatch(TodoAction.updateTodo(todo))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
