import { Card, Placeholder } from "react-bootstrap";
import { getAllBidang } from "../api";
import CardBidang from "../components/CardBidang"
import useQuery from "../hooks/useQuery";

const Team = ({ data }) => {
    console.log(data);
    return (
        < >
            <section id="team" className="team">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Badan Pengurus Harian</h2>

                    </div>
                    <div className="row gy-5 justify-content-center">

                        {data.map((val, i) => (

                            <div
                                key={i}
                                className="col-lg-4 col-md-6 member"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div className="member-img">
                                    <img
                                        src={val.gambar}
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
                                    <h4>{val.nama}</h4>
                                    <span>{val.jabatan}</span>

                                </div>
                            </div>
                        ))}


                        <div className="section-header mt-5">
                            <h2>  Pengurus Bidang</h2>
                        </div>

                        <ListBidang />
                    </div>
                </div>
            </section>
        </ >
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
export default Team