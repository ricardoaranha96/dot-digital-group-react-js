import React from "react";
import accordionimg from "../../../../assets/img/img-accordion.jpg";

export default class Item extends React.Component {
    render() {
        return (
            <div
                className={[
                    "accordion__item",
                    this.props.active ? "accordion__item--active" : null,
                ].join(" ")}
            >
                <div
                    className="accordion__item__head"
                    onClick={() => this.props.setActiveItem(this.props.index)}
                >
                    <div className="row row--justify-content-space-between row--align-items-center">
                        <div className="col">Lorem Ipsum</div>
                        <div className="col accordion__item__head__arrow__col">
                            <i className="arrow-icon arrow-icon-small-white-down accordion__item__head__arrow__col__arrow accordion__item__head__arrow__col__arrow--inactive"></i>
                            <i className="arrow-icon arrow-icon-small-black-up accordion__item__head__arrow__col__arrow accordion__item__head__arrow__col__arrow--active"></i>
                        </div>
                    </div>
                </div>
                <div className="accordion__item__body">
                    <div className="accordion__item__body__content">
                        <div className="row row--align-items-center">
                            <div className="col accordion__item__body__content__col-image">
                                <img
                                    src={accordionimg}
                                    alt="Accordion"
                                    title="Accordion"
                                    className="accordion__item__body__content__col-image__image"
                                />
                            </div>
                            <div className="col accordion__item__body__content__description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Quis ipsum suspendisse ultrices gravida. Risus
                                commodo viverra maecenas accumsan lacus vel
                                facilisis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
