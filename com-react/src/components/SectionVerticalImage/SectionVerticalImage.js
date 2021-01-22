import "./SectionVerticalImage.css";
import React from "react";
import imgverticalcenter from "../../assets/img/img-vertical-center.jpg";

export default class SectionVerticalImage extends React.Component {
    render() {
        return (
            <section className="section-vertical-image">
                <div className="container">
                    <div className="row row--align-items-center">
                        <div className="col section-vertical-image__image-col">
                            <img
                                src={imgverticalcenter}
                                alt="Vertical"
                                className="section-vertical-image__image-col__image"
                            />
                        </div>
                        <div className="col section-vertical-image__text-col">
                            <h1 className="section-vertical-image__text-col__title uppercase">
                                Lorem Ipsum
                            </h1>
                            <div className="section-vertical-image__text-col__description">
                                <p className="section-vertical-image__text-col__description__paragraph">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida.
                                    Risus commodo viverra maecenas accumsan
                                    lacus vel facilisis.
                                </p>
                                <p className="section-vertical-image__text-col__description__paragraph bold">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida.
                                    Risus commodo viverra maecenas accumsan
                                    lacus vel facilisis.
                                </p>
                                <p className="section-vertical-image__text-col__description__paragraph italic">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida.
                                    Risus commodo viverra maecenas accumsan
                                    lacus vel facilisis.
                                </p>
                                <p className="section-vertical-image__text-col__description__paragraph">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida.
                                    Risus commodo viverra maecenas accumsan
                                    lacus vel facilisis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
