import React, { Component } from "react";
import TodoList from "./todolist/index.jsx";
import TodoCreator from "./todolist/TodoCreator.jsx";

export default class Home extends Component {
    state = {
        showModal: false
    };

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    render() {
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
                {this.state.showModal ? <TodoCreator toggleModal={this.toggleModal}/> : null}
                <TodoList />
            </div>
        );
    }
}
