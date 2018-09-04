import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoCreator extends Component {
    state = {
        title: "",
        description: "",
        priority: 1,
        tags: ""
    };

    componentWillReceiveProps() {
        if (!this.props.isLoading) {
            this.setState({
                title: "",
                description: "",
                priority: "",
                tags: ""
            });
        }
    }

    handleChange = e => {
        const state = Object.assign({},this.state);
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    submitTodo = () => {
        const { title, description, priority, tags } = this.state;
        if ((title !== "", description !== "", priority !== "", tags !== "")) {
            const tag = [];
            tag.push(tags);
            this.setState({ tags: tag, priority: Number(priority) }, () => {
                this.props.postTodo(this.state);
            });
        }
    };

    render() {
        const { title, description, tags } = this.state;
        return (
            <div className="todo-creator">
                <form className="todo-creator-form">
                    <h2>Add New Item</h2>
                    <div className="todo-creator-form-input">
                        <span className="todo-creator-form-input-label">
                            Title
                        </span>
                        <br />
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="todo-creator-form-input">
                        <span className="todo-creator-form-input-label">
                            Description
                        </span>
                        <br />
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="todo-creator-form-input">
                        <span className="todo-creator-form-input-label">
                            Priority
                        </span>
                        <br />
                        <select name="priority" onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="todo-creator-form-input">
                        <span className="todo-creator-form-input-label">
                            Tags (Seperated by commas)
                        </span>
                        <br />
                        <input
                            type="text"
                            name="tags"
                            value={tags}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="todo-creator-form-input">
                        <button
                            className="todo-creator-form-btn"
                            name="add"
                            type="button"
                            onClick={() => this.submitTodo()}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

TodoCreator.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    postTodo: PropTypes.func.isRequired
};
