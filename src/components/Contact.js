import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import img1 from '../assets/img/team/me.jpg';

//form helpers
import { validateEmail } from '../utils/helpers';


export default function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'Name') {
            setName(inputValue);
        } else if (inputType === 'Message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }
        if (!name) {
            setErrorMessage(
                `Please enter your name`
            );
            return;
        }
        if (!message) {
            setErrorMessage(
                `Please enter a message`
            );
            return;
        }

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setMessage('');
        setEmail('');
    };

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
                        <Form.Group className="mb-3" controlId="formName" onChange={handleInputChange}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter your name" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail" onChange={handleInputChange}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formControlsTextarea" onChange={handleInputChange}>
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as="textarea" rows={3} type="message" placeholder="Enter your message for me here" rows="4" />
                            </Form.Group>
                            <Button className="btn btn-dark textUppercase" variant="primary" type="submit" onClick={handleFormSubmit}>
                                Submit
                            </Button>
                        </Form>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}

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