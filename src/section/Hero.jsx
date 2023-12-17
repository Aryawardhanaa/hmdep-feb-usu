
const Hero = () => {
    return (
        <>   <section id="hero" className="hero">
            <div className="info d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2 data-aos="fade-down">
                                Selamat Datang  <span>Di Website HMDEP USU</span>
                            </h2>
                            <p data-aos="fade-up">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <a
                                data-aos="fade-up"
                                data-aos-delay={200}
                                href="#get-started"
                                className="btn-get-started"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="hero-carousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval={5000}
            >
                <div
                    className="carousel-item active"
                    style={{
                        backgroundImage: "url(/assets/img/allpengurus2.jpg)"
                    }}
                ></div>
                <div
                    className="carousel-item"
                    style={{
                        backgroundImage: "url(/assets/img/dokkajian.jpeg)"
                    }}
                />
                <div
                    className="carousel-item"
                    style={{
                        backgroundImage: "url(/assets/img/dokaudiensi.jpeg)"
                    }}
                />
                <div
                    className="carousel-item"
                    style={{
                        backgroundImage: "url(/assets/img/dokdiskusi.jpeg)"
                    }}
                />
                <div
                    className="carousel-item"
                    style={{
                        backgroundImage: "url(/assets/img/dokkajian.jpeg)"
                    }}
                />
                <a
                    className="carousel-control-prev"
                    href="#hero-carousel"
                    role="button"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon bi bi-chevron-left"
                        aria-hidden="true"
                    />
                </a>
                <a
                    className="carousel-control-next"
                    href="#hero-carousel"
                    role="button"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon bi bi-chevron-right"
                        aria-hidden="true"
                    />
                </a>
            </div>
        </section>
        </>
    )
}

export default Hero