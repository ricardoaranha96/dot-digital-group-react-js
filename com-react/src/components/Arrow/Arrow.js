import React from "react";
import "./Arrow.css";

export default class Arrow extends React.Component {
    handleClassName = () => {
        let className = "arrow-icon arrow-icon--";

        className += this.props.size + "-";
        className += this.props.color + "-";
        className += this.props.direction;

        return className;
    };
    render() {
        return <i className={this.handleClassName()}></i>;
    }
}
