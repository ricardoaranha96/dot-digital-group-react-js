import React from "react";
import "./Accordion.css";
import Item from "./Item/Item";

export default class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.setState({
            activeItem: null,
        });
    }

    accordionItems = () => {
        let items = [];
        for (let i = 0; i < 4; i++) {
            items.push(
                <Item
                    key={i}
                    index={i}
                    active={this.state?.activeItem === i ? true : false}
                    setActiveItem={this.setActiveItem}
                ></Item>
            );
        }
        return items;
    };

    setActiveItem = (index) => {
        if (this.state?.activeItem === index) {
            this.setState({ activeItem: null });
        } else {
            this.setState({ activeItem: index });
        }
    };

    render() {
        return <div className="accordion">{this.accordionItems()}</div>;
    }
}
