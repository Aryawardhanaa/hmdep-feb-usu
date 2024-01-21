import { Button, Card, Placeholder } from "react-bootstrap"
import CardBidang from "../components/CardBidang"
import Modals from "../components/ModalProgram"
import { useState } from "react";
import { getAllBidang } from "../api";
import useQuery from "../hooks/useQuery";

const StrukturOrganisasi = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <section id="team" className="team">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Badan Pengurus Harian</h2>
                    </div>

                    <div className="row justify-content-center gy-5">
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
                                <h4>Rangga Aditya Fangga dan Muhammad Hanif Aulia</h4>
                                <span>Chief Executive Officer</span>

                            </div>
                        </div>
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


                    </div>
                    <br />
                    <div className="section-header mt-5">
                        <h2>  Pengurus Bidang</h2>
                    </div>
                    <ListBidang />


                </div>
            </section>
        </>
    )
}

const ListBidang = () => {
    const {
        data: bidang = [],
        isLoading,
        isSuccess,
        error,
        refetch,
    } = useQuery(getAllBidang);
    if (isLoading) {
        return <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                </Card.Body>
            </Card>
        </>
    }
    console.log(bidang);
    return (
        <div className="  " style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
            {
                bidang.data.map((val, i) =>

                    <CardBidang data={bidang.data} key={i} nama_bidang={val.bidang} image={val.gambar} />
                )
            }


        </div>
    )
}
export default StrukturOrganisasi