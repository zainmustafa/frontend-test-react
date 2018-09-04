import React, { Component } from "react";

export default class TodoCreator extends Component {
    render() {
        return (
            <div className="todo-creator">
                <form className="todo-creator-form">
                    <h2>Add New Item</h2>
                    <div className="todo-creator-form-input">
                        <span className="todo-creator-form-input-label">
                            Title
                        </span>
                        <br />
                        <input type="text" name="title" />
                    </div>
                    <div className="todo-creator-form-input">
                        <span className="todo-creator-form-input-label">
                            Description
                        </span>
                        <br />
                        <input type="text" name="description" />
                    </div>

                    <div className="todo-creator-form-input">
                        <span className="todo-creator-form-input-label">
                            Priority
                        </span>
                        <br />
                        <select name="priority">
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
                        <input type="text" name="tags" />
                    </div>
                    <div className="todo-creator-form-input">
                        <button
                            className="todo-creator-form-btn"
                            name="add"
                            type="button"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
