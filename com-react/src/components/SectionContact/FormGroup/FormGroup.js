import React from "react";

export default class FormGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
    }

    maskPhone = (value) => {
        let maskPhone = "(XX) XXXX-XXXX";
        let maskPhoneBig = "(XX) XXXXX-XXXX";

        let cleanValue = value.replace(/[^\d]/g, "");
        let newValue = "";
        let i = 0;

        let mask = cleanValue.length === 11 ? maskPhoneBig : maskPhone;

        mask.split("").forEach(function (char) {
            if (i >= cleanValue.length) {
                return true;
            }

            if (char === "X") {
                newValue += cleanValue.charAt(i);
                i++;
            } else {
                newValue += char;
            }
        });

        return newValue;
    };

    updateInputValue = (e) => {
        let value = e.target.value;
        if (this.props.type === "tel") {
            value = this.maskPhone(value);
        }
        this.setState({ value: value });
    };

    render() {
        return (
            <div className="form-group form-contact__form-element">
                <label className="form-group__label">
                    {this.props.required ? "*" : null}
                    {this.props.label}:
                </label>
                <input
                    className="form-group__input"
                    type={this.props.type}
                    value={this.state.value}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    maxLength="255"
                    required={this.props.required ? true : false}
                    onChange={this.updateInputValue}
                />
            </div>
        );
    }
}
