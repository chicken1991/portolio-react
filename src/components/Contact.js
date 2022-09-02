import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import img1 from '../assets/img/team/me.jpg';

export default function Contact() {


    return (
        <div>
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">Contact</div>
                </div>
            </header>
            <section className="page-section bg-light" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Please reach out!</h2>
                        <h3 className="section-subheading text-muted">It'll be nice to meet you</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={img1} alt="..." />
                                <h4>Ben Pitroff</h4>
                                <p className="text-muted">Webdev Student</p>
                                <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/benpitroff"
                                    aria-label="Ben Pitroff Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/benpitroff/"
                                    aria-label="Ben Pitroff LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="https://github.com/chicken1991"
                                    aria-label="Ben Pitroff Github Profile"><i className="fa-brands fa-github"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="mailto:dev@chicken1991.anonaddy.com"
                                    aria-label="Ben Pitroff Email"><i className="fa-solid fa-envelope"></i></a>
                            </div>
                        </div>
                        <Form className="col-sm-4 mx-auto">
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formControlsTextarea">
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as="textarea" rows={3} type="message" placeholder="Enter your message for me here" rows="4"/>
                            </Form.Group>
                            <Button className="btn btn-dark textUppercase" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">Warn: This form is for demo purposes, and is non-functional</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}