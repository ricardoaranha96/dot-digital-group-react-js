import React from "react";
import Carousel from "./Carousel/Carousel";
import Arrow from "../Arrow/Arrow";
import "./Webdoor.css";

export default class Webdoor extends React.Component {
    constructor(props) {
        super(props);
        this.anchorRef = React.createRef();
    }

    smoothAnchorScroll = (e, respond = null) => {
        const distanceToTop = (el) =>
            Math.floor(el.getBoundingClientRect().top);
        e.preventDefault();
        var targetID = respond
            ? respond.getAttribute("href")
            : this.anchorRef.current.getAttribute("href");
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);
        window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
        const checkIfDone = setInterval(function () {
            const atBottom =
                window.innerHeight + window.pageYOffset >=
                document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = "-1";
                targetAnchor.focus();
                window.history.pushState("", "", targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    };

    render() {
        return (
            <section className="section section-webdoor">
                <div className="section-webdoor__header">
                    <h1 className="section-webdoor__header__title">
                        Lorem Ipsum
                    </h1>
                    <h3 className="section-webdoor__header__subtitle">
                        Lorem ipsum dolor sit amet,{" "}
                        <br className="visible-xs" /> consectetur adipiscing
                        elit
                    </h3>
                    <a
                        href="#section-slides"
                        className="section-webdoor__header__anchor scroll-anchor"
                        ref={this.anchorRef}
                        onClick={this.smoothAnchorScroll}
                    >
                        <Arrow
                            size="big"
                            color="black"
                            direction="down"
                        ></Arrow>
                    </a>
                </div>
                <Carousel id="webdoor-carousel"></Carousel>
            </section>
        );
    }
}
