import "./SectionSlides.css";
import React from "react";
import Slider from "./Slider/Slider";

export default class SectionSlides extends React.Component {
    render() {
        return (
            <section id="section-slides" className="section-slides">
                <div className="container">
                    <Slider></Slider>
                </div>
            </section>
        );
    }
}
