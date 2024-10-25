import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer/footer";
import RoomCheck from "../components/Check-Room/room-check";
import SmoothScroll from '../components/SmoothScroll/SmothScroll';


const Index = () => {
    return (
        <div>
            <Header />

            <section
                className="site-hero overlay"
                style={{ backgroundImage: 'url(images/hero_4.jpg)' }}
                data-stellar-background-ratio="0.5"
            >
                <div className="container">
                    <div
                        className="row site-hero-inner justify-content-center align-items-center"
                    >
                        <div className="col-md-10 text-center" data-aos="fade-up">
                            <span className="custom-caption text-uppercase text-white d-block mb-3">
                                Welcome To 5
                                <span className="fa fa-star text-primary"></span> Hotel
                            </span>
                            <h1 className="heading">Find Your Perfect Stay</h1>
                        </div>
                    </div>
                </div>

                <SmoothScroll />
            </section>

            <RoomCheck />

            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5"
                            data-aos="fade-up"
                        >
                            <figure className="img-absolute">
                                <img src="images/food-1.jpg" alt="Image" className="img-fluid" />
                            </figure>
                            <img src="images/img_1.jpg" alt="Image" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
                            <h2 className="heading">Welcome!</h2>
                            <p className="mb-4">
                                <b>Welcome to Rent Nest!<br></br>
                                    As your trusted booking platform, <br></br>Rent Nest connects you to a diverse range of accommodations for every budget, whether for a weekend getaway or business trip. Enjoy seamless booking as we help you find the perfect stay for your needs.
                                </b>
                            </p>
                            <p>
                                <a href="/" className="btn btn-primary text-white py-2 mr-3"
                                >Learn More</a>

                                <span className="mr-3 font-family-serif"><em>or</em></span>
                                <a
                                    href="https://vimeo.com/channels/staffpicks/93951774"
                                    data-fancybox
                                    className="text-uppercase letter-spacing-1"
                                >See video</a>

                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-md-7">
                            <h2 className="heading" data-aos="fade-up">Rooms &amp; Suites</h2>
                            <p data-aos="fade-up" data-aos-delay="100">
                                <b>At Rent Nest</b>, we offer a wide range of room types satisfied every traveler’s needs.
                                Whether you're need for cozy single rooms,
                                spacious suites, family-friendly apartments, or luxurious penthouses,
                                we have options to meet every style and budget. Discover a perfect space with us!
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4" data-aos="fade-up">
                            <a href="/" className="room">
                                <figure className="img-wrap">
                                    <img
                                        src="images/img_1.jpg"
                                        alt="Free website template"
                                        className="img-fluid mb-3"
                                    />
                                </figure>
                                <div className="p-3 text-center room-info">
                                    <h2>Single Room</h2>
                                    <span className="text-uppercase letter-spacing-1">
                                        90$ / per night</span>

                                </div>
                            </a>
                        </div>

                        <div className="col-md-6 col-lg-4" data-aos="fade-up">
                            <a href="/" className="room">
                                <figure className="img-wrap">
                                    <img
                                        src="images/img_2.jpg"
                                        alt="Free website template"
                                        className="img-fluid mb-3"
                                    />
                                </figure>
                                <div className="p-3 text-center room-info">
                                    <h2>Family Room</h2>
                                    <span className="text-uppercase letter-spacing-1">
                                        120$ / per night</span>

                                </div>
                            </a>
                        </div>

                        <div className="col-md-6 col-lg-4" data-aos="fade-up">
                            <a href="/" className="room">
                                <figure className="img-wrap">
                                    <img
                                        src="images/img_3.jpg"
                                        alt="Free website template"
                                        className="img-fluid mb-3"
                                    />
                                </figure>
                                <div className="p-3 text-center room-info">
                                    <h2>Presidential Room</h2>
                                    <span className="text-uppercase letter-spacing-1">
                                        250$ / per night</span >

                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section slider-section bg-light">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-md-7">
                            <h2 className="heading" data-aos="fade-up">Photos</h2>
                            <p data-aos="fade-up" data-aos-delay="100">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated
                                they live in Bookmarksgrove right at the coast of the Semantics, a
                                large language ocean.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                className="home-slider major-caousel owl-carousel mb-5"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="slider-item">
                                    <a
                                        href="images/slider-1.jpg"
                                        data-fancybox="images"
                                        data-caption="Caption for this image"
                                    ><img
                                            src="images/slider-1.jpg"
                                            alt="Image placeholder"
                                            className="img-fluid"
                                        /></a>
                                </div>
                                <div className="slider-item">
                                    <a
                                        href="images/slider-2.jpg"
                                        data-fancybox="images"
                                        data-caption="Caption for this image"
                                    ><img
                                            src="images/slider-2.jpg"
                                            alt="Image placeholder"
                                            className="img-fluid"
                                        /></a>
                                </div>
                                <div className="slider-item">
                                    <a
                                        href="images/slider-3.jpg"
                                        data-fancybox="images"
                                        data-caption="Caption for this image"
                                    ><img
                                            src="images/slider-3.jpg"
                                            alt="Image placeholder"
                                            className="img-fluid"
                                        /></a>
                                </div>
                                <div className="slider-item">
                                    <a
                                        href="images/slider-4.jpg"
                                        data-fancybox="images"
                                        data-caption="Caption for this image"
                                    ><img
                                            src="images/slider-4.jpg"
                                            alt="Image placeholder"
                                            className="img-fluid"
                                        /></a>
                                </div>
                                <div className="slider-item">
                                    <a
                                        href="images/slider-5.jpg"
                                        data-fancybox="images"
                                        data-caption="Caption for this image"
                                    ><img
                                            src="images/slider-5.jpg"
                                            alt="Image placeholder"
                                            className="img-fluid"
                                        /></a>
                                </div>
                                <div className="slider-item">
                                    <a
                                        href="images/slider-6.jpg"
                                        data-fancybox="images"
                                        data-caption="Caption for this image"
                                    ><img
                                            src="images/slider-6.jpg"
                                            alt="Image placeholder"
                                            className="img-fluid"
                                        /></a>
                                </div>
                                <div className="slider-item">
                                    <a
                                        href="images/slider-7.jpg"
                                        data-fancybox="images"
                                        data-caption="Caption for this image"
                                    ><img
                                            src="images/slider-7.jpg"
                                            alt="Image placeholder"
                                            className="img-fluid"
                                        /></a>
                                </div>
                            </div>
                            {/* END slider */}
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="section bg-image overlay"
                style={{ backgroundImage: 'url(images/hero_3.jpg)' }}
            >
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-md-7">
                            <h2 className="heading text-white" data-aos="fade">
                                Our Restaurant Menu
                            </h2>
                            <p className="text-white" data-aos="fade" data-aos-delay="100">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated
                                they live in Bookmarksgrove right at the coast of the Semantics, a
                                large language ocean.
                            </p>
                        </div>
                    </div>
                    <div className="food-menu-tabs" data-aos="fade">
                        <ul className="nav nav-tabs mb-5" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a
                                    className="nav-link active letter-spacing-2"
                                    id="mains-tab"
                                    data-toggle="tab"
                                    href="/mains"
                                    role="tab"
                                    aria-controls="mains"
                                    aria-selected="true">
                                    Mains</a>

                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link letter-spacing-2"
                                    id="desserts-tab"
                                    data-toggle="tab"
                                    href="/desserts"
                                    role="tab"
                                    aria-controls="desserts"
                                    aria-selected="false">
                                    Desserts</a>

                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link letter-spacing-2"
                                    id="drinks-tab"
                                    data-toggle="tab"
                                    href="/drinks"
                                    role="tab"
                                    aria-controls="drinks"
                                    aria-selected="false">
                                    Drinks</a>

                            </li>
                        </ul>
                        <div className="tab-content py-5" id="myTabContent">
                            <div
                                className="tab-pane fade show active text-left"
                                id="mains"
                                role="tabpanel"
                                aria-labelledby="mains-tab"
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$20.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Murgh Tikka Masala</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$35.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Fish Moilee</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$15.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Safed Gosht</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$10.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">French Toast Combo</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$8.35</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Vegie Omelet</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$22.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">
                                                    Chorizo &amp; Egg Omelet</a>

                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* .tab-pane */}

                            <div
                                className="tab-pane fade text-left"
                                id="desserts"
                                role="tabpanel"
                                aria-labelledby="desserts-tab"
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$11.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Banana Split</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$72.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Sticky Toffee Pudding</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$26.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Pecan</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$42.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Apple Strudel</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$7.35</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Pancakes</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$22.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Ice Cream Sundae</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* .tab-pane */}
                            <div
                                className="tab-pane fade text-left"
                                id="drinks"
                                role="tabpanel"
                                aria-labelledby="drinks-tab"
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$32.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Spring Water</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$14.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">
                                                    Coke, Diet Coke, Coke Zero</a>

                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$93.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Orange Fanta</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$18.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Lemonade, Lemon Squash</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$38.35</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">Sparkling Mineral Water</a>
                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                        <div className="food-menu mb-5">
                                            <span className="d-block text-primary h4 mb-3">$69.00</span>
                                            <h3 className="text-white">
                                                <a href="/" className="text-white">
                                                    Lemon, Lime &amp; Bitters</a>

                                            </h3>
                                            <p className="text-white text-opacity-7">
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* .tab-pane */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section testimonial-section">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-md-7">
                            <h2 className="heading" data-aos="fade-up">People Says</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="js-carousel-2 owl-carousel mb-5"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="testimonial text-center slider-item">
                                <div className="author-image mb-3">
                                    <img
                                        src="images/person_1.jpg"
                                        alt="Image placeholder"
                                        className="rounded-circle mx-auto"
                                    />
                                </div>
                                <blockquote>
                                    <p>
                                        &ldquo;A small river named Duden flows by their place and
                                        supplies it with the necessary regelialia. It is a
                                        paradisematic country, in which roasted parts of sentences fly
                                        into your mouth.&rdquo;
                                    </p>
                                </blockquote>
                                <p><em>&mdash; Jean Smith</em></p>
                            </div>

                            <div className="testimonial text-center slider-item">
                                <div className="author-image mb-3">
                                    <img
                                        src="images/person_2.jpg"
                                        alt="Image placeholder"
                                        className="rounded-circle mx-auto"
                                    />
                                </div>
                                <blockquote>
                                    <p>
                                        &ldquo;Even the all-powerful Pointing has no control about the
                                        blind texts it is an almost unorthographic life One day
                                        however a small line of blind text by the name of Lorem Ipsum
                                        decided to leave for the far World of Grammar.&rdquo;
                                    </p>
                                </blockquote>
                                <p><em>&mdash; John Doe</em></p>
                            </div>

                            <div className="testimonial text-center slider-item">
                                <div className="author-image mb-3">
                                    <img
                                        src="images/person_3.jpg"
                                        alt="Image placeholder"
                                        className="rounded-circle mx-auto"
                                    />
                                </div>
                                <blockquote>
                                    <p>
                                        &ldquo;When she reached the first hills of the Italic
                                        Mountains, she had a last view back on the skyline of her
                                        hometown Bookmarksgrove, the headline of Alphabet Village and
                                        the subline of her own road, the Line Lane.&rdquo;
                                    </p>
                                </blockquote>
                                <p><em>&mdash; John Doe</em></p>
                            </div>

                            <div className="testimonial text-center slider-item">
                                <div className="author-image mb-3">
                                    <img
                                        src="images/person_1.jpg"
                                        alt="Image placeholder"
                                        className="rounded-circle mx-auto"
                                    />
                                </div>
                                <blockquote>
                                    <p>
                                        &ldquo;A small river named Duden flows by their place and
                                        supplies it with the necessary regelialia. It is a
                                        paradisematic country, in which roasted parts of sentences fly
                                        into your mouth.&rdquo;
                                    </p>
                                </blockquote>
                                <p><em>&mdash; Jean Smith</em></p>
                            </div>

                            <div className="testimonial text-center slider-item">
                                <div className="author-image mb-3">
                                    <img
                                        src="images/person_2.jpg"
                                        alt="Image placeholder"
                                        className="rounded-circle mx-auto"
                                    />
                                </div>
                                <blockquote>
                                    <p>
                                        &ldquo;Even the all-powerful Pointing has no control about the
                                        blind texts it is an almost unorthographic life One day
                                        however a small line of blind text by the name of Lorem Ipsum
                                        decided to leave for the far World of Grammar.&rdquo;
                                    </p>
                                </blockquote>
                                <p><em>&mdash; John Doe</em></p>
                            </div>

                            <div className="testimonial text-center slider-item">
                                <div className="author-image mb-3">
                                    <img
                                        src="images/person_3.jpg"
                                        alt="Image placeholder"
                                        className="rounded-circle mx-auto"
                                    />
                                </div>
                                <blockquote>
                                    <p>
                                        &ldquo;When she reached the first hills of the Italic
                                        Mountains, she had a last view back on the skyline of her
                                        hometown Bookmarksgrove, the headline of Alphabet Village and
                                        the subline of her own road, the Line Lane.&rdquo;
                                    </p>
                                </blockquote>
                                <p><em>&mdash; John Doe</em></p>
                            </div>
                        </div>
                        {/* END slider */}
                    </div>
                </div>
            </section>

            <section className="section blog-post-entry bg-light">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-md-7">
                            <h2 className="heading" data-aos="fade-up">Events</h2>
                            <p data-aos="fade-up">

                                Rent Nest offers versatile room rentals for all events—whether business meetings
                                , weddings, or family gatherings.
                                Let us provide the perfect space to make your occasion unforgettable!
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12 post"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="media media-custom d-block mb-4 h-100">
                                <a href="/" className="mb-4 d-block"
                                ><img
                                        src="images/img_1.jpg"
                                        alt="Image placeholder"
                                        className="img-fluid"
                                    /></a>
                                <div className="media-body">
                                    <span className="meta-post">February 26, 2018</span>
                                    <h2 className="mt-0 mb-3">
                                        <a href="/">
                                            Travel Hacks to Make Your Flight More Comfortable</a>

                                    </h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12 post"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="media media-custom d-block mb-4 h-100">
                                <a href="/" className="mb-4 d-block"
                                ><img
                                        src="images/img_2.jpg"
                                        alt="Image placeholder"
                                        className="img-fluid"
                                    /></a>
                                <div className="media-body">
                                    <span className="meta-post">February 26, 2018</span>
                                    <h2 className="mt-0 mb-3">
                                        <a href="/">
                                            5 Job Types That Aallow You To Earn As You Travel The
                                            World</a>

                                    </h2>
                                    <p>
                                        Separated they live in Bookmarksgrove right at the coast of
                                        the Semantics, a large language ocean.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12 post"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="media media-custom d-block mb-4 h-100">
                                <a href="/" className="mb-4 d-block"
                                ><img
                                        src="images/img_3.jpg"
                                        alt="Image placeholder"
                                        className="img-fluid"
                                    /></a>
                                <div className="media-body">
                                    <span className="meta-post">February 26, 2018</span>
                                    <h2 className="mt-0 mb-3">
                                        <a href="/">30 Great Ideas On Gifts For Travelers</a>
                                    </h2>
                                    <p>
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia. t is a paradisematic country,
                                        in which roasted parts of sentences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <Footer />
        </div >
    );
};

export default Index;
