import React, { useRef, useEffect, useState } from "react";
import imgslider from "../../../../assets/img/img-slider.jpg";

const Item = (props) => {
    const [width, setWidth] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        setWidth(elementRef.current.getBoundingClientRect().width);
        props.setCarouselItemWidth(
            elementRef.current.getBoundingClientRect().width
        );
        window.addEventListener("resize", () => {
            setWidth(elementRef.current.getBoundingClientRect().width);
            props.setCarouselItemWidth(
                elementRef.current.getBoundingClientRect().width
            );
        });
    }, []);

    return (
        <div className="slider__inner__track__item" ref={elementRef}>
            <div className="slider__inner__track__item__content">
                <img
                    src={imgslider}
                    alt="Slide"
                    title="Slide"
                    className="slider__inner__track__item__content__image"
                />
                <h5 className="slider__inner__track__item__content__title">
                    Lorem Ipsum
                </h5>
                <p className="slider__inner__track__item__content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
            </div>
        </div>
    );
};

export default Item;
