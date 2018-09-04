import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ListItem from "./ListItem";
import Spinner from "../Spinner";
import TodoAction from "../../actions/todos";

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
        }
        else {
            this.setState({
                showSubCategory: true,
                categoryIndex: Number(index)
            });
        }
    };
    render() {
        const { nodeList, detailLoading } = this.props;
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
    detailLoading: PropTypes.bool.isRequired,
    getAllNotes: PropTypes.func.isRequired,
    nodeList: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    detailLoading: state.todos.detailLoading,
    nodeList: state.todos.nodeList
});

const mapDispatchToProps = dispatch => ({
    getAllNotes: () => dispatch(TodoAction.getAllNotes()),
    updateTodo: todo => dispatch(TodoAction.updateTodo(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
