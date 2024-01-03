import { Link, useNavigate } from "react-router-dom"
import useQuery from "../hooks/useQuery";
import { getBerita } from "../api";
import { Spinner } from "react-bootstrap";
import CardBerita from "../components/CardBerita";

const Berita = () => {
    const {
        data: berita = [],
        isLoading,
        isSuccess,
        error,
        refetch,
    } = useQuery(getBerita);

    if (isLoading) return <Spinner animation="border" variant="warning" />

    // console.log(berita.data);
    return (
        < ><section id="recent-blog-posts" className="recent-blog-posts">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Berita</h2>

                </div>

                <div className="row gy-5">


                    {
                        berita?.data?.map((item, index) => (
                            <CardBerita slug={item.slug} author={item.author} created_at={item.created_at} judul={item.judul} image={item.url_gambar1} key={index} />
                        ))
                    }


                </div>

            </div>
        </section></ >
    )
}

export default Berita