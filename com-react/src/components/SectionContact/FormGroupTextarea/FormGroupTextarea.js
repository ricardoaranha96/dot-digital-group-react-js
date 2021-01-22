import React from "react";

export default class FormGroupTextarea extends React.Component {
    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
    }

    focusTextarea = () => {
        this.textareaRef.current.focus();
    };

    render() {
        return (
            <div className="form-group-textarea form-contact__form-element">
                <textarea
                    className="form-group-textarea__textarea"
                    required={this.props.required}
                    name={this.props.name}
                    ref={this.textareaRef}
                ></textarea>
                <label
                    className="form-group-textarea__label"
                    onClick={this.focusTextarea}
                >
                    {this.props.required ? "*" : null}
                    {this.props.label}:
                    <span className="form-group-textarea__label__placeholder">
                        {this.props.placeholder}
                    </span>
                </label>
            </div>
        );
    }
}
