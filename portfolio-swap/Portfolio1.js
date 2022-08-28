import React from 'react';

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
                <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    {/* <!-- Portfolio item 4--> */}
                    <div class="portfolio-item">
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
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                    {/* <!-- Portfolio item 5--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="./assets/img/portfolio/stackmypaddle.png"
                                alt="stackmypaddle-thumbnail" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Stackmypaddle.com</div>
                            <div class="portfolio-caption-subheading text-muted">Pickleball events and court locator for
                                the Seattle area</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="./assets/img/portfolio/employee-tracker.png"
                                alt="employee-tracker-thumbnail" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Employee Tracker</div>
                            <div class="portfolio-caption-subheading text-muted">Database manipulation through Inquirer
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 1--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="./assets/img/portfolio/weather-dashboard.png"
                                alt="weather-dashboard-thumbnail" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Weather Dashboard</div>
                            <div class="portfolio-caption-subheading text-muted">Utilizing external API Calls</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 2--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="./assets/img/portfolio/workday-scheduler.png"
                                alt="workday-scheduler-thumbnail" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Workday Scheduler</div>
                            <div class="portfolio-caption-subheading text-muted">Procedurally generated w/ JS</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 3--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="./assets/img/portfolio/marvelous-day.png"
                                alt="marvelous-day-thumbnail" />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Marvelous Day</div>
                            <div class="portfolio-caption-subheading text-muted">A group project that tested our git
                                abilities</div>
                        </div>
                    </div>
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
    {/* <!-- Portfolio item 2 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                        alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Workday Scheduler</h2>
                                <p class="item-intro text-muted">
                                    <a target="_blank" href="https://chicken1991.github.io/workday-scheduler">Click here
                                        for the live demo</a>
                                    <span> : </span>
                                    <a target="_blank" href="https://github.com/chicken1991/workday-scheduler">Click
                                        here for the repo</a>
                                </p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/workday-scheduler.png"
                                    alt="workday-scheduler-img" />
                                <p>This workday schedule is built procedurally by generating HTML elements from
                                    javascript. It helped me learn localstorage and event listeners.</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Explore
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Graphic Design
                                    </li>
                                </ul>
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
    {/* <!-- Portfolio item 3 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                        alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Marvelous Day</h2>
                                <p class="item-intro text-muted">
                                    <a target="_blank" href="https://moetive.github.io/Project-1/">Click here for the
                                        live demo</a>
                                    <span> : </span>
                                    <a target="_blank" href="https://github.com/Moetive/Project-1">Click here for the
                                        repo</a>
                                </p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/marvelous-day.png"
                                    alt="marvelous-day-img" />
                                <p>This group project tested our abilities to collaborate over Git. Frustrations were
                                    overcome to produce a webapp that calls the Marvel Comic API to fetch a list of
                                    comics released within a user-specified month/year.</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Credits:</strong>
                                        Hossein, Mohammed, Dylan, Tamara, Ben
                                    </li>
                                </ul>
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
    {/* <!-- Portfolio item 4 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                        alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Tech Blog</h2>
                                <p class="item-intro text-muted">
                                    <a target="_blank" href="https://chicken-1991-tech-blog.herokuapp.com/">Click here
                                        for the live demo</a>
                                    <span> : </span>
                                    <a target="_blank" href="https://chicken1991.github.io/tech-blog">Click here for the
                                        repo</a>
                                </p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/tech-blog.png"
                                    alt="tech-blog-img" />
                                <p>This simple blog style website allows a user to log in, make posts, and comment on
                                    other posts. Database,
                                    Sequelize, and Handlebars are the heavy lifters here.
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
    {/* <!-- Portfolio item 5 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                        alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">stackmypaddle.com</h2>
                                <p class="item-intro text-muted">
                                    <a target="_blank" href="https://stackmypaddle.com">Click here for the live demo</a>
                                    <span> : </span>
                                    <a target="_blank" href="https://github.com/furhan-dev/pickleball.git">Click here
                                        for the repo</a>
                                </p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/stackmypaddle.png"
                                    alt="stackmypaddle-img" />
                                <p>This group project was created to demonstrate our ability to use api routes, a
                                    database, and user logins to
                                    create a useful website to allow a user to locate their nearest pickleball court!
                                </p>
                                <ul class="list-inline">
                                        <strong>Credits:</strong>
                                    <li>
                                        <a href="https://github.com/JimMason564">Jim Mason, </a>
                                        <a href="https://github.com/furhan-dev">Furhan Samani, </a>
                                        <a href="https://github.com/rreeves1996">Ryan Reeves, </a>
                                        <a href="https://github.com/chicken1991">Ben Pitroff</a>
                                        </li>
                                </ul>
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
    {/* <!-- Portfolio item 6 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
                        alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Employee Tracker</h2>
                                <p class="item-intro text-muted">
                                    <a target="_blank" href="https://github.com/chicken1991/employee-tracker.git">Click
                                        here for the repo</a>
                                </p> <img class="img-fluid d-block mx-auto"
                                    src="assets/img/portfolio/employee-tracker.png" alt="employee-tracker-img" />
                                <p>This was my first forray into database manipulation, utilizing the inquirer CLI to
                                    prompt the user to display, add, and edit different aspects of a company database.
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