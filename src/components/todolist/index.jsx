import React, { Component } from "react";
import ListItem from "./ListItem.jsx";

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <div>Todo List</div>
                <ListItem />
            </div>
        );
    }
}
