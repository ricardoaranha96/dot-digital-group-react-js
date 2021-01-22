import React from "react";
import { default as SliderArrow } from "../../../Arrow/Arrow";

export default class Arrow extends React.Component {
    render() {
        return (
            <button
                className={[
                    "slider__arrows__arrow",
                    "slider__arrows__arrow--" + this.props.direction,
                ].join(" ")}
                data-direction={this.props.direction}
                onClick={() => this.props.scrollSlider(this.props.direction)}
            >
                <SliderArrow
                    size="big"
                    color="white"
                    direction={this.props.direction}
                ></SliderArrow>
            </button>
        );
    }
}
