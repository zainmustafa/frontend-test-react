import React, { Component } from "react";


export default class TodoDetails extends Component {
    render() {
        return (
            <div className="tododetails">
                <div className="tododetails-inner-item">
                    <span>Title: </span> {details.title}
                </div>

                <div className="tododetails-inner-item">
                    <span>Description: </span> {details.description}
                </div>

                <div className="tododetails-inner-item">
                    <span>Priority: </span> {details.priority}
                </div>

                <div className="tododetails-inner-item">
                    <span>Tags: </span>
                    {
                        details.tags.map((v) => `${v}, `)
                    }
                </div>
            </div>
        );
    }
}
