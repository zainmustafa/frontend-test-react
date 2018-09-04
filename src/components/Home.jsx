import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import TodoList from "./todolist/index.jsx";
import TodoCreator from "./todolist/TodoCreator.jsx";
import TodoAction from "../actions/todos.js";

class Home extends Component {
    state = {
        showModal: false
    };

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    render() {
        const { postTodo } = this.props;
        return (
            <div className="home">
                <div className="home-header">
                    <h2 className="home-header-text">Todo List</h2>
                    <button
                        className="home-header-btn"
                        name="add"
                        type="button"
                        onClick={this.toggleModal}
                    >
                        Add New
                    </button>
                </div>
                {this.state.showModal ? (
                    <TodoCreator
                        isLoading={this.props.isLoading}
                        postTodo={postTodo}
                        toggleModal={this.toggleModal}
                    />
                ) : null}
                <TodoList />
            </div>
        );
    }
}

Home.propTypes = {
    postTodo: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isLoading: state.todos.isLoading
});

const mapDispatchToProps = dispatch => {
    return {
        postTodo: item => dispatch(TodoAction.postTodo(item))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
