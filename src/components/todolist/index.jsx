import React, { Component } from "react";
import ListItem from "./ListItem.jsx";



export default class TodoList extends Component {
    render() {
        return (
            <div className="todolist">
                {items.map((v, i) => (
                    <ListItem item={v} key={i.toString()} />
                ))}
            </div>
        );
    }
}
