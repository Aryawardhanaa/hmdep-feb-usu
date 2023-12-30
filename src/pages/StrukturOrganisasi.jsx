import { Button } from "react-bootstrap"
import CardBidang from "../components/CardBidang"
import Modals from "../components/Modals"
import { useState } from "react";

const StrukturOrganisasi = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
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

                            </div>
                        </div>
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

                            </div>
                        </div>

                    </div>
                    <br />
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
            </section>
        </>
    )
}

export default StrukturOrganisasi