import React from 'react';
import img1 from '../assets/img/about/1.jpeg';
import img2 from '../assets/img/about/2.jpeg';
import img3 from '../assets/img/about/3.jpg';

export default function About() {


    return (
        <div>
        
        <header class="masthead">
                <div class="container">
                    <div class="masthead-subheading">Welcome!</div>
                </div>
            </header>

        <section class="page-section" id="about">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">About</h2>
                <h3 class="section-subheading text-muted">A little about myself</h3>
            </div>
            <ul class="timeline">
                <li>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={img1}
                            alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>November 2010</h4>
                            <h4 class="subheading">6 Feet Down</h4>
                        </div>
                        <div class="timeline-body">
                            <p class="text-muted">I started my career in an unusual spot - in the ground! I was getting
                                married soon, so I needed a job that pays the bills. That job? Grave digger.</p>
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={img2}
                            alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>September 2014</h4>
                            <h4 class="subheading">Hello Tech World!</h4>
                        </div>
                        <div class="timeline-body">
                            <p class="text-muted">I was miraculously hired into a Data Center Technician position - my
                                experience? Building gaming PCs.</p>
                        </div>
                    </div>
                </li>
                <li class="timeline-image">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={img3}
                            alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>April 2022</h4>
                            <h4 class="subheading">Diving into Dev</h4>
                        </div>
                        <div class="timeline-body">
                            <p class="text-muted">My persuits are leading me toward software and site reliability. So I
                                am currently enrolled in a coding bootcamp - which is why you see this page now!</p>
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image">
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