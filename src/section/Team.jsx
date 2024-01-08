import CardBidang from "../components/CardBidang"

const Team = () => {
    return (
        < >
            <section id="team" className="team">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Badan Pengurus Harian</h2>

                    </div>
                    <div className="row gy-5">
                        <div
                            className="col-lg-4 col-md-6 member"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="member-img">
                                <img
                                    src="assets/img/ketuasekretaris.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="social">
                                    <a href="#">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                            <div className="member-info text-center">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                {/* <p>
                                Aliquam iure quaerat voluptatem praesentium possimus unde
                                laudantium vel dolorum distinctio dire flow
                            </p> */}
                            </div>
                        </div>
                        {/* End Team Member */}
                        <div
                            className="col-lg-4 col-md-6 member"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="member-img">
                                <img
                                    src="assets/img/pengurus3.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="social">
                                    <a href="#">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                            <div className="member-info text-center">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                {/* <p>
                                Labore ipsam sit consequatur exercitationem rerum laboriosam
                                laudantium aut quod dolores exercitationem ut
                            </p> */}
                            </div>
                        </div>
                        {/* End Team Member */}
                        <div
                            className="col-lg-4 col-md-6 member"
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <div className="member-img">
                                <img
                                    src="assets/img/pengurus4.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="social">
                                    <a href="#">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                            <div className="member-info text-center">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                {/* <p>
                                Illum minima ea autem doloremque ipsum quidem quas aspernatur modi
                                ut praesentium vel tque sed facilis at qui
                            </p> */}
                            </div>
                        </div>
                        <div className="section-header mt-5">
                            <h2>  Pengurus Bidang</h2>
                        </div>

                        <div className="  " style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
                            <CardBidang nama_bidang={'Bidang Penelitian dan Pengembangan'} image={'bidang1.jpg'} />
                            <CardBidang nama_bidang={'Bidang Kerohanian'} image={'bidang1.jpg'} />
                            <CardBidang nama_bidang={'Bidang Minat dan Bakat'} image={'bidang2.jpg'} />
                            <CardBidang nama_bidang={'Bidang Organisasi'} image={'bidang2.jpg'} />
                            <CardBidang nama_bidang={'Bidang Hubungan Masyarakat'} image={'bidang3.jpg'} />
                            <CardBidang nama_bidang={'Bidang Kewirausahaan'} image={'bidang3.jpg'} />

                        </div>
                    </div>
                </div>
            </section>
        </ >
    )
}

export default Team