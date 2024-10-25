
import React from "react";//-
import Header from "../components/header";//-
import Footer from "../components/Footer/footer";//-
import SmoothScroll from '../components/SmoothScroll/SmothScroll';//-


function Contact() {
    return (
        <div>
            <Header />
            <section className="site-hero inner-page overlay"
                style={{ backgroundImage: 'url(images/hero_4.jpg)' }}
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row site-hero-inner justify-content-center align-items-center">
                        <div className="col-md-10 text-center" data-aos="fade">
                            <h1 className="heading mb-3">Contact</h1>
                            <ul className="custom-breadcrumbs mb-4">
                                <li><a href="index.html">Home</a></li>
                                <li>&bullet;</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <SmoothScroll />
            </section>
            <section class="section contact-section" id="next">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">

                            <form action="#" method="post" class="bg-white p-md-5 p-4 mb-5 border">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" class="form-control "></input>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" id="phone" class="form-control "></input>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" class="form-control "></input>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-md-12 form-group">
                                        <label for="message">Write Message</label>
                                        <textarea name="message" id="message" class="form-control " cols="30" rows="8"></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="submit" value="Send Message" class="btn btn-primary text-white font-weight-bold"></input>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div class="col-md-5" data-aos="fade-up" data-aos-delay="200">
                            <div class="row">
                                <div class="col-md-10 ml-auto contact-info">
                                    <p><span class="d-block">Address:</span> <span> 98 West 21th Street, Suite 721 New York NY 10016</span>
                                    </p>
                                    <p><span class="d-block">Phone:</span> <span> (+1) 234 4567 8910</span></p>
                                    <p><span class="d-block">Email:</span> <span> info@domain.com</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}
export default Contact;

