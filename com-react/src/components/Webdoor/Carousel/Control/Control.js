import React from "react";

export default class Control extends React.Component {
    render() {
        return (
            <li
                onClick={() => this.props.setActiveItem(this.props.index)}
                className={[
                    "carousel__controls__control",
                    this.props.active
                        ? "carousel__controls__control--active"
                        : null,
                ].join(" ")}
            ></li>
        );
    }
}
