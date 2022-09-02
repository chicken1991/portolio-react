import React from 'react';
import img1 from '../assets/img/about/1.jpeg';
import img2 from '../assets/img/about/2.jpeg';
import img3 from '../assets/img/about/3.jpg';

export default function About() {


    return (
        <div>

            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">About</div>
                </div>
            </header>

            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">This is me</h2>
                        <h3 className="section-subheading text-muted">A little about myself</h3>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={img1}
                                alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>November 2010</h4>
                                    <h4 className="subheading">6 Feet Down</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">I started my career in an unusual spot - in the ground! I was getting
                                        married soon, so I needed a job that pays the bills. That job? Grave digger.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={img2}
                                alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>September 2014</h4>
                                    <h4 className="subheading">Hello Tech World!</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">I was miraculously hired into a Data Center Technician position - my
                                        experience? Building gaming PCs.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-image">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={img3}
                                alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>April 2022</h4>
                                    <h4 className="subheading">Diving into Dev</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">My persuits are leading me toward software and site reliability. So I
                                        am currently enrolled in a coding bootcamp - which is why you see this page now!</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Meet
                                    <br />
                                    Me
                                    <br />
                                    Below!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )

}