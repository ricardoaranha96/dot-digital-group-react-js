import "./Slider.css";
import React from "react";
import Item from "./Item/Item";
import Arrow from "./Arrow/Arrow";

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.innerRef = React.createRef();
        this.state = {
            carouselItemWidth: null,
        };
    }

    setCarouselItemWidth = (width) => {
        this.setState({ carouselItemWidth: width });
    };

    sliderItems = () => {
        let items = [];
        for (let i = 0; i < 9; i++) {
            items.push(
                <Item
                    key={i}
                    setCarouselItemWidth={this.setCarouselItemWidth}
                ></Item>
            );
        }
        return items;
    };

    scrollSlider = (direction) => {
        if (direction === "left") {
            this.innerRef.current.scrollBy({
                left: this.state.carouselItemWidth * -1,
                behavior: "smooth",
            });
        } else {
            this.innerRef.current.scrollBy({
                left: this.state.carouselItemWidth,
                behavior: "smooth",
            });
        }
    };

    render() {
        return (
            <div className="slider">
                <div className="slider__inner" ref={this.innerRef}>
                    <div className="slider__inner__track">
                        {this.sliderItems()}
                    </div>
                </div>
                <div className="slider__arrows">
                    <Arrow
                        direction="left"
                        scrollSlider={this.scrollSlider}
                    ></Arrow>
                    <Arrow
                        direction="right"
                        scrollSlider={this.scrollSlider}
                    ></Arrow>
                </div>
            </div>
        );
    }
}
