import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Projects from '../Projects';

//assets

import closeIcon from '../assets/img/close-icon.svg'



export default function Portfolio() {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (
        <div>
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">Portfolio</div>
                </div>
            </header>

            {/* Insert some funky procedural shit with projects here */}


            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Here is the work I have done so far.</h3>
                    </div>
                    <div className="row">
                        {/* This is where I attempt to map the projects array/objects */}

                        {Projects.map((project) => (
                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0" key={project.id}>
                                <div className="portfolio-item">
                                    <a className="portfolio-link" data-bs-toggle="modal" onClick={handleShow}>
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <img className="img-fluid" src={project.image}
                                            alt={project.name} />
                                    </a>
                                    <div className="portfolio-caption">
                                        <div className="portfolio-caption-heading">{project.name}</div>
                                        <div className="portfolio-caption-subheading text-muted">{project.short}</div>
                                    </div>

                                    <Modal className="portfolio-modal modal fade" key={project.id} tabIndex="-1" role="dialog" show={show} onHide={handleShow}>
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                <div className="close-modal" data-bs-dismiss="modal"><img src={closeIcon}
                                                    alt="Close modal" onClick={handleClose} /></div>

                                                <div className="container">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-8">

                                                            <div className="modal-body">
                                                                <h2 className="text-uppercase">{project.name}</h2>
                                                                <p className="item-intro text-muted">
                                                                    <a target="_blank" href={project.live}>Click
                                                                        here for the live demo</a>
                                                                    <span> : </span>
                                                                    <a target="_blank" href={project.repo}>Click
                                                                        here for the repo</a>
                                                                </p>
                                                                <img className="img-fluid d-block mx-auto" src={project.image}
                                                                    alt="weather-dashboard-img" />
                                                                <p>{project.desc}</p>
                                                                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                                                    type="button" onClick={handleClose}>
                                                                    <i className="fas fa-xmark me-1"></i>
                                                                    Close
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODALS!!!! */}
            {/* {Projects.map((project) => (
            <div className="portfolio-modal modal fade" id={project.id} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                            alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">{project.name}</h2>
                                        <p className="item-intro text-muted">
                                            <a target="_blank" href={project.live}>Click
                                                here for the live demo</a>
                                            <span> : </span>
                                            <a target="_blank" href={project.repo}>Click
                                                here for the repo</a>
                                        </p>
                                        <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/weather-dashboard.png"
                                            alt="weather-dashboard-img" />
                                        <p>{project.desc}</p>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                            type="button">
                                            <i className="fas fa-xmark me-1"></i>
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
             */}


        </div>
    )

}