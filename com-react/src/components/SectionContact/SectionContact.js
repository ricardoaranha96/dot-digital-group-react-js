import React from "react";
import "./SectionContact.css";
import FormGroup from "./FormGroup/FormGroup";
import FormGroupTextarea from "./FormGroupTextarea/FormGroupTextarea";

export default class SectionContact extends React.Component {
    render() {
        return (
            <section className="section-contact">
                <div className="section-contact__inner">
                    <div className="container">
                        <form id="form-contact" className="form-contact">
                            <div className="row">
                                <div className="col col--12">
                                    <FormGroup
                                        label="Nome"
                                        required={true}
                                        placeholder="Informe seu nome"
                                        name="name"
                                        type="text"
                                    ></FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col--12 col--md-6">
                                    <FormGroup
                                        label="E-mail"
                                        required={true}
                                        type="email"
                                        name="email"
                                        placeholder="Informe seu e-mail"
                                    ></FormGroup>
                                </div>
                                <div className="col col--12 col--md-6">
                                    <FormGroup
                                        label="Telefone"
                                        required={true}
                                        type="tel"
                                        name="phone"
                                        placeholder="(__) _____-____"
                                    ></FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col--12">
                                    <FormGroupTextarea
                                        required={true}
                                        name="message"
                                        placeholder="Escreva aqui"
                                        label="Mensagem"
                                    ></FormGroupTextarea>
                                </div>
                            </div>
                            <div className="row row--justify-content-center">
                                <div className="col">
                                    <div className="form-contact__form-element">
                                        <button
                                            className="form-button"
                                            type="submit"
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
