import "./SectionAccordion.css";
import React from "react";
import Accordion from "./Accordion/Accordion";

export default class SectionAccordion extends React.Component {
    render() {
        return (
            <section className="section-accordion">
                <div className="container">
                    <Accordion></Accordion>
                </div>
            </section>
        );
    }
}
