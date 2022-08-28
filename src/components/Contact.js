import React from 'react';
import img1 from '../assets/img/team/me.jpg';

export default function Contact() {


    return (
        <div>
            <header class="masthead">
                <div class="container">
                    <div class="masthead-subheading">Welcome!</div>
                </div>
            </header>
        <section class="page-section bg-light" id="contact">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">This is Me</h2>
                <h3 class="section-subheading text-muted">Nice to meet you</h3>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src={img1} alt="..." />
                        <h4>Ben Pitroff</h4>
                        <p class="text-muted">Webdev Student</p>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.facebook.com/benpitroff"
                            aria-label="Ben Pitroff Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/benpitroff/"
                            aria-label="Ben Pitroff LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://github.com/chicken1991"
                            aria-label="Ben Pitroff Github Profile"><i class="fa-brands fa-github"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="mailto:dev@chicken1991.anonaddy.com"
                            aria-label="Ben Pitroff Email"><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <p class="large text-muted">Feel free to reach out - why else would I have contact info on here?</p>
                </div>
            </div>
        </div>
    </section>
    </div>
    )

}