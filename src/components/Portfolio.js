import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Projects from '../Projects';

//assets

import closeIcon from '../assets/img/close-icon.svg'

// YUCK this is yucky and it is gross. But it works I guess...
const blankModalData = 
    {
        id: '',
        name: '',
        repo: '',
        live: '',
        image:'',
        desc:'',
        short:''
    }


export default function Portfolio() {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState(blankModalData);


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
                                    <a className="portfolio-link" 
                                        data-bs-toggle="modal" 
                                        onClick = {() => {
                                            setModalData(project);
                                            setModalIsOpen(true);
                                        }}
                                            >
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

                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Modal className="portfolioModal modal fade" tabIndex="-1" role="dialog" show={modalIsOpen} onHide= {() => setModalIsOpen(false)}>
                <div className="modalDialog">
                    <div className="modalContent">
                        <div className="closeModal" data-bs-dismiss="modal"><img src={closeIcon}
                            alt="Close modal" onClick = {() => setModalIsOpen(false)} />
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">

                                    <div className="modalBody">
                                        <h2 className="textUppercase">{modalData.name}</h2>
                                        <p className="itemIntro textMuted">
                                            <a target="_blank" href={modalData.live}>Click
                                                here for the live demo</a>
                                            <span> : </span>
                                            <a target="_blank" href={modalData.repo}>Click
                                                here for the repo</a>
                                        </p>
                                        <img className="img-fluid d-block mx-auto" src={modalData.image}
                                            alt="weather-dashboard-img" />
                                        <p>{modalData.desc}</p>
                                        <button className="btn btnPrimary btnXl textUppercase" 
                                            type="button" onClick = {() => setModalIsOpen(false)}>
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
    )

}