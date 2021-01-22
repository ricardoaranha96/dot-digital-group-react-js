import React from 'react';
import webdoorimage from '../../../../assets/img/webdoor.jpg';

export default class Item extends React.Component{
    render(){
        return (
            <div className={["carousel__inner__item", this.props.active ? "carousel__inner__item--active" : null].join(" ")}>
                <img src={webdoorimage} alt="Webdoor" title="Webdoor" className="carousel__inner__item__image"/>
            </div>
        );
    }
}