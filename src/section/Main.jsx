import Berita from "./Berita"
import Testimoni from "./Testimoni"

const Main = () => {
    return (
        <>
            <main id="main">

                <section id="get-started" className="get-started section-bg">
                    <div className="container">

                        <div className="row justify-content-between gy-4">

                            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
                                <div className="content">
                                    <h3>Minus hic non reiciendis ea possimus at quia.</h3>
                                    <p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa. Eos ipsum nobis
                                        ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi possimus ut delectus
                                        dicta.
                                    </p>
                                    <p>Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos. Deserunt
                                        porro magni qui necessitatibus dolorem at animi cupiditate.</p>
                                </div>
                            </div>

                            <div className="col-lg-5" data-aos="fade">
                                <form action="forms/quote.php" method="post" className="php-email-form">
                                    <h3>Get a quote</h3>
                                    <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead sero
                                        park flows.</p>
                                    <div className="row gy-3">

                                        <div className="col-md-12">
                                            <input type="text" name="name" className="form-control" placeholder="Name" required />
                                        </div>

                                        <div className="col-md-12 ">
                                            <input type="email" className="form-control" name="email" placeholder="Email" required />
                                        </div>

                                        <div className="col-md-12">
                                            <input type="text" className="form-control" name="phone" placeholder="Phone" required />
                                        </div>

                                        <div className="col-md-12">
                                            <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                        </div>

                                        <div className="col-md-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>

                                            <button type="submit">Get a quote</button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="alt-services" className="alt-services">
                    <div className="container" data-aos="fade-up">

                        <div className="row justify-content-around gy-4">
                            <div className="col-lg-6 img-bg" style={{ backgroundImage: "url(/assets/img/gedung-anwar-karim.jpg)" }} data-aos="zoom-in"
                                data-aos-delay="100"></div>

                            <div className="col-lg-5 d-flex flex-column justify-content-center">
                                <h3 className="text-center">Visi HMDEP</h3>

                                <p className="text-center testimonials">
                                    <div className="testimonial-item" style={{ padding: "unset", margin: "unset", minHeight: "unset", boxShadow: "unset" }}>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        Optimalisasi Himpunan mahasiswa Departemen Ekonomi Pembangunan Universitas Sumatera Utara sebagai wadah pengembangan kemampuan dan potensi mahasiswa jurusan Ekonomi Pembangunan.
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </div>
                                </p>
                                <h3 className="text-center mt-5">Misi HMDEP</h3>

                                <div className="icon-box d-flex mt-0 position-relative" data-aos="fade-up" data-aos-delay="100">
                                    <i className="bi bi-easel flex-shrink-0"></i>
                                    <div>
                                        {/* <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4> */}
                                        <p>Meningkatkan kesadaran dan pemahaman mahasiswa terhadap konsep dan teori ekonomi melalui kegiatan seminar dan diskusi interaktif.</p>
                                    </div>
                                </div>

                                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                                    <i className="bi bi-patch-check flex-shrink-0"></i>
                                    <div>

                                        <p>Mengadakan program pengabdian masyarakat untuk menerapkan ilmu ekonomi pembangunan dalam membantu masyarakat sekitar, terutama dalam bidang pengembangan usaha mikro dan menengah.</p>
                                    </div>
                                </div>

                                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                                    <i className="bi bi-brightness-high flex-shrink-0"></i>
                                    <div>

                                        <p>Membangun jaringan dan kerjasama dengan organisasi-organisasi mahasiswa lainnya, guna meningkatkan sinergi dan kesempatan pengembangan diri bagi anggota organisasi.
                                        </p>
                                    </div>
                                </div>

                                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                                    <i className="bi bi-brightness-high flex-shrink-0"></i>
                                    <div>

                                        <p>Menyelenggarakan kegiatan-kegiatan pengembangan soft skill, seperti pelatihan kepemimpinan, manajemen waktu, dan keterampilan komunikasi, untuk meningkatkan kapasitas anggota dalam bersaing di dunia kerja.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                <section id="features" className="features section-bg">
                    <div className="container" data-aos="fade-up">

                        <ul className="nav nav-tabs row  g-2 d-flex">

                            <li className="nav-item col-3">
                                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                                    <h4>Modisit</h4>
                                </a>
                            </li>

                            <li className="nav-item col-3">
                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                                    <h4>Praesenti</h4>
                                </a>
                            </li>

                            <li className="nav-item col-3">
                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                                    <h4>Explica</h4>
                                </a>
                            </li>

                            <li className="nav-item col-3">
                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                                    <h4>Nostrum</h4>
                                </a>
                            </li>

                        </ul>

                        <div className="tab-content">

                            <div className="tab-pane active show" id="tab-1">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                                        data-aos="fade-up" data-aos-delay="100">
                                        <h3>Voluptatem dignissimos provident</h3>
                                        <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                                aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                                                pariatur.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                                        <img src="assets/img/features-1.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane" id="tab-2">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                        <h3>Neque exercitationem debitis</h3>
                                        <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="bi bi-check2-all"></i> Provident mollitia neque rerum asperiores dolores quos qui a.
                                                Ipsum neque dolor voluptate nisi sed.</li>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                                aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                                                pariatur.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src="assets/img/features-2.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane" id="tab-3">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                        <h3>Voluptatibus commodi accusamu</h3>
                                        <ul>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="bi bi-check2-all"></i> Provident mollitia neque rerum asperiores dolores quos qui a.
                                                Ipsum neque dolor voluptate nisi sed.</li>
                                        </ul>
                                        <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore
                                            magna aliqua.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src="assets/img/features-3.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane" id="tab-4">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                        <h3>Omnis fugiat ea explicabo sunt</h3>
                                        <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                                aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                                                pariatur.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src="assets/img/features-4.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="projects" className="projects">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Our Projects</h2>
                            <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto
                                accusamus fugit aut qui distinctio</p>
                        </div>

                        <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry"
                            data-portfolio-sort="original-order">

                            <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-remodeling">Remodeling</li>
                                <li data-filter=".filter-construction">Construction</li>
                                <li data-filter=".filter-repairs">Repairs</li>
                                <li data-filter=".filter-design">Design</li>
                            </ul>

                            <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

                                <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/projects/remodeling-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Remodeling 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1"
                                                data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i
                                                className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/projects/construction-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Construction 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/projects/construction-1.jpg" title="Construction 1"
                                                data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i
                                                className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/projects/repairs-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Repairs 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/projects/repairs-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-repairs"
                                                className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i
                                                className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-design">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/projects/design-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Design 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/projects/design-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-book"
                                                className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i
                                                className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/projects/remodeling-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Remodeling 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/projects/remodeling-2.jpg" title="Remodeling 2"
                                                data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i
                                                className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/projects/construction-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Construction 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/projects/construction-2.jpg" title="Construction 2"
                                                data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i
                                                className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/projects/repairs-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Repairs 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/projects/repairs-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs"
                                                className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i
                                                className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-design">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/projects/design-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Design 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/projects/design-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-book"
                                                className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i
                                                className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/projects/remodeling-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Remodeling 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/projects/remodeling-3.jpg" title="Remodeling 3"
                                                data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i
                                                className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/projects/construction-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Construction 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/projects/construction-3.jpg" title="Construction 3"
                                                data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i
                                                    className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i
                                                className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/projects/repairs-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Repairs 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/projects/repairs-3.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs"
                                                className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i
                                                className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-design">
                                    <div className="portfolio-content h-100">
                                        <img src="assets/img/projects/design-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Design 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="assets/img/projects/design-3.jpg" title="Repairs 3" data-gallery="portfolio-gallery-book"
                                                className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i
                                                className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                <Testimoni />
                <Berita />


            </main >
        </>
    )
}

export default Main