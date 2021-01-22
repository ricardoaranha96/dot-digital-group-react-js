import "./Carousel.css";

import React from "react";
import Item from "./Item/Item";
import Control from "./Control/Control";

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
    }

    carouselItems() {
        let items = [];
        for (let i = 0; i < 3; i++) {
            items.push(
                <Item
                    key={i}
                    index={i}
                    active={i === this.state.activeIndex ? true : false}
                ></Item>
            );
        }
        return items;
    }

    carouselControls() {
        let items = [];
        for (let i = 0; i < 3; i++) {
            items.push(
                <Control
                    key={i}
                    index={i}
                    active={i === this.state.activeIndex ? true : false}
                    setActiveItem={this.setActiveItem}
                ></Control>
            );
        }
        return items;
    }

    setActiveItem = (activeIndex) => {
        this.setState({
            activeIndex: activeIndex,
        });
    };

    render() {
        return (
            <div id={this.props.id} className="carousel">
                <div className="carousel__inner">{this.carouselItems()}</div>
                <ol className="carousel__controls">
                    {this.carouselControls()}
                </ol>
            </div>
        );
    }
}
