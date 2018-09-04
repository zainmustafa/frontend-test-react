import React from "react";
import PropTypes from "prop-types";
import TodoDetails from "./TodoDetails.jsx";


export default class ListItem extends React.Component {
    state = {
        showDetails: false
    };

    toggleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        });
    };

    render() {
        const { item } = this.props;
        const tempDate = new Date(item.createdAt);

        const date =
            `${tempDate.getDate()
            }/${
                tempDate.getMonth()
            }/${
                tempDate.getFullYear()}`;

        return (
            <React.Fragment>
                <div className="listitem" onClick={this.toggleDetails}>
                    <div className="listitem-left">
                        <span className="listitem-left-date">{date}</span>
                        <span className="listitem-left-title">
                            {item.title}
                        </span>
                    </div>
                    <div className="listitem-right">
                        <input
                            className="listitem-right-check"
                            type="checkbox"
                            name="vehicle"
                            value="Car"
                            checked={item.isDone}
                        />
                    </div>
                </div>
                {this.state.showDetails ? (
                    <TodoDetails display={this.state.showDetails} id={item.id} />
                ) : null}
            </React.Fragment>
        );
    }
}

ListItem.propTypes = {
    item: PropTypes.object.isRequired
}