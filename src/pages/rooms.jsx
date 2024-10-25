import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer/footer";
import RoomCheck from "../components/Check-Room/room-check";
import SmoothScroll from '../components/SmoothScroll/SmothScroll';
function Rooms() {
    return (
        <div>
            <Header />
            <section className="site-hero inner-page overlay"
                style={{ backgroundImage: 'url(images/hero_4.jpg)' }}
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row site-hero-inner justify-content-center align-items-center">
                        <div className="col-md-10 text-center" data-aos="fade">
                            <h1 className="heading mb-3">Rooms</h1>
                            <ul className="custom-breadcrumbs mb-4">
                                <li><a href="/">Home</a></li>
                                <li>&bullet;</li>
                                <li>Rooms</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <SmoothScroll />
            </section>


            <RoomCheck />


            <section className="section" >
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
                            <a href="#" className="room">
                                <figure className="img-wrap">
                                    <img src="images/img_1.jpg" alt="Free website template" className="img-fluid mb-3" />
                                </figure>
                                <div className="p-3 text-center room-info">
                                    <h2>Single Room</h2>
                                    <span className="text-uppercase letter-spacing-1">90$ / per night</span>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
                            <a href="#" className="room">
                                <figure className="img-wrap">
                                    <img src="images/img_2.jpg" alt="Free website template" className="img-fluid mb-3" />
                                </figure>
                                <div className="p-3 text-center room-info">
                                    <h2>Family Room</h2>
                                    <span className="text-uppercase letter-spacing-1">120$ / per night</span>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
                            <a href="#" className="room">
                                <figure className="img-wrap">
                                    <img src="images/img_3.jpg" alt="Free website template" className="img-fluid mb-3" />
                                </figure>
                                <div className="p-3 text-center room-info">
                                    <h2>Presidential Room</h2>
                                    <span className="text-uppercase letter-spacing-1">250$ / per night</span>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
                            <a href="#" className="room">
                                <figure className="img-wrap">
                                    <img src="images/img_1.jpg" alt="Free website template" className="img-fluid mb-3" />
                                </figure>
                                <div className="p-3 text-center room-info">
                                    <h2>Single Room</h2>
                                    <span className="text-uppercase letter-spacing-1">90$ / per night</span>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
                            <a href="#" className="room">
                                <figure className="img-wrap">
                                    <img src="images/img_2.jpg" alt="Free website template" className="img-fluid mb-3" />
                                </figure>
                                <div className="p-3 text-center room-info">
                                    <h2>Family Room</h2>
                                    <span className="text-uppercase letter-spacing-1">120$ / per night</span>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
                            <a href="#" className="room">
                                <figure className="img-wrap">
                                    <img src="images/img_3.jpg" alt="Free website template" className="img-fluid mb-3" />
                                </figure>
                                <div className="p-3 text-center room-info">
                                    <h2>Presidential Room</h2>
                                    <span className="text-uppercase letter-spacing-1">250$ / per night</span>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section bg-light">

                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-md-7">
                            <h2 className="heading" data-aos="fade">Great Offers</h2>
                            <p data-aos="fade">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>

                    <div className="site-block-half d-block d-lg-flex bg-white" data-aos="fade" data-aos-delay="100">
                        <a href="#" className="image d-block bg-image-2" style={{ backgroundImage: 'url(images/img_1.jpg)' }}></a>
                        <div className="text">
                            <span className="d-block mb-4"><span className="display-4 text-primary">$199</span> <span className="text-uppercase letter-spacing-2">/ per night</span> </span>
                            <h2 className="mb-4">Family Room</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p><a href="#" className="btn btn-primary text-white">Book Now</a></p>
                        </div>
                    </div>
                    <div className="site-block-half d-block d-lg-flex bg-white" data-aos="fade" data-aos-delay="200">
                        <a href="#" className="image d-block bg-image-2 order-2" style={{ backgroundImage: 'url(images/img_2.jpg)' }}></a>
                        <div className="text order-1">
                            <span className="d-block mb-4"><span className="display-4 text-primary">$299</span> <span className="text-uppercase letter-spacing-2">/ per night</span> </span>
                            <h2 className="mb-4">Presidential Room</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p><a href="#" className="btn btn-primary text-white">Book Now</a></p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Rooms;
