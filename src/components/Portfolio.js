import React from 'react';
import Projects  from '../Projects';



export default function Portfolio() {

    return (
        <div>
            <header class="masthead">
                <div class="container">
                    <div class="masthead-subheading">Portfolio</div>
                </div>
            </header>

            {/* Insert some funky procedural shit with projects here */}


            <section class="page-section bg-light" id="portfolio">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Portfolio</h2>
                        <h3 class="section-subheading text-muted">Here is the work I have done so far.</h3>
                    </div>
                    <div class="row">
                        {/* This is where I attempt to map the projects array/objects */}
            {Projects.map((project) => (
                        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">

                            {/* <!-- Portfolio item 4--> */}
                            <div class="portfolio-item">
                                <a class="portfolio-link" data-bs-toggle="modal" href={project.id}>
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={project.image}
                                        alt={project.name} />
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">{project.name}</div>
                                    <div class="portfolio-caption-subheading text-muted">{project.short}</div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                

            </section>

            {/* MODALS!!!! */}
            {Projects.map((project) => (
            <div class="portfolio-modal modal fade" id={project.id} tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                            alt="Close modal" /></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <div class="modal-body">
                                        {/* <!-- Project details--> */}
                                        <h2 class="text-uppercase">{project.name}</h2>
                                        <p class="item-intro text-muted">
                                            <a target="_blank" href={project.live}>Click
                                                here for the live demo</a>
                                            <span> : </span>
                                            <a target="_blank" href={project.repo}>Click
                                                here for the repo</a>
                                        </p>
                                        <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/weather-dashboard.png"
                                            alt="weather-dashboard-img" />
                                        <p>{project.desc}</p>
                                        <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                            type="button">
                                            <i class="fas fa-xmark me-1"></i>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}


        </div>
    )

}