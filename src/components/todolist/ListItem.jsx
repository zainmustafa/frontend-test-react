import React from "react";
import PropTypes from "prop-types";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";

import TodoDetails from "./TodoDetails";

export default class ListItem extends React.Component {
    render() {
        const {
            todo,
            index,
            showSubCategory,
            categoryIndex,
            updateIndex,
            updateTodo
        } = this.props;

        const tempDate = new Date(todo.createdAt);
        const date = `${tempDate.getDate()}/${tempDate.getMonth()}/${tempDate.getFullYear()}`;
        return (
            <React.Fragment>
                <div className="listitem">
                    <div className="listitem-left">
                        <span className="listitem-left-date">{date}</span>
                        <span className="listitem-left-title">
                            {todo.title}
                        </span>
                    </div>
                    <div className="listitem-right">
                        <input
                            className="listitem-right-check"
                            type="checkbox"
                            name="vehicle"
                            value="Car"
                            checked={todo.isDone}
                            onChange={() => updateTodo(todo)}
                        />

                        {categoryIndex === index ? (
                            <span onClick={() => updateIndex(index)}>
                                <ExpandLess />
                            </span>
                        ) : (
                            <span onClick={() => updateIndex(index)}>
                                <ExpandMore />
                            </span>
                        )}
                    </div>
                </div>
                {showSubCategory && index === categoryIndex ? (
                    <TodoDetails display={showSubCategory} id={todo.id} />
                ) : null}
            </React.Fragment>
        );
    }
}

ListItem.propTypes = {
    categoryIndex: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    showSubCategory: PropTypes.bool.isRequired,
    todo: PropTypes.object.isRequired,
    updateIndex: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
};
