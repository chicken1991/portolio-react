import React from 'react';
import Projects from '../Projects';



export default function Portfolio() {

    const renderItems = () => {
        const data = this.Projects;

        const mapRows = data.map((item, index) => (

            <div class="portfolio-item">
                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src={item.img}
                        alt={item.name} />
                </a>
                <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">{item.name}</div>
                    <div class="portfolio-caption-subheading text-muted">{item.short}</div>
                </div>
            </div>


            // <Fragment key={item.id}>
            //     <li>
            //         {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
            //         <span>Name : {item.name}</span>
            //         <span>User Type: {item.user_type}</span>
            //         <button onClick={() => this.deleteUser(item.id)}>
            //             Delete User
            //         </button>
            //     </li>
            // </Fragment>
        ));
        return mapRows;
    };

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
                        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">

                            {/* <!-- Portfolio item 4--> */}
                            {/* <div class="portfolio-item">
                                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="./assets/img/portfolio/tech-blog.png"
                                        alt="tech-blog-thumbnail" />
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Tech Blog</div>
                                    <div class="portfolio-caption-subheading text-muted">Database and user profile capabilities
                                    </div>
                                </div>
                            </div> */}
                            {this.renderItems}
                        </div>
                    </div>
                </div>

            </section>

            {/* MODALS!!!! */}
            <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                            alt="Close modal" /></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <div class="modal-body">
                                        {/* <!-- Project details--> */}
                                        <h2 class="text-uppercase">Weather Dashboard</h2>
                                        <p class="item-intro text-muted">
                                            <a target="_blank" href="https://chicken1991.github.io/weather-dashboard/">Click
                                                here for the live demo</a>
                                            <span> : </span>
                                            <a target="_blank" href="https://github.com/chicken1991/weather-dashboard/">Click
                                                here for the repo</a>
                                        </p>
                                        <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/weather-dashboard.png"
                                            alt="weather-dashboard-img" />
                                        <p>This project was completed to practice external API calls using two OpenWeatherMap
                                            APIs: One Call for weather information, and Geocoding for determining city location.
                                        </p>
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


        </div>
    )

}