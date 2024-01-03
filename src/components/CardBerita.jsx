import { Link } from "react-router-dom"

const CardBerita = ({ image, judul, created_at, author, slug }) => {
    return (
        <>
            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="post-item position-relative h-100">

                    <div className="post-img position-relative overflow-hidden">
                        {/* <img src="/assets/img/dokaudiensi.jpeg" className="img-fluid" alt="" /> */}
                        <img src={image} className="img-fluid" alt="" />
                    </div>

                    <div className="post-content d-flex flex-column">

                        <h3 className="post-title">{judul}
                        </h3>

                        <div className="meta d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <i className="bi bi-person"></i> <span className="ps-2">{author}</span>
                            </div>
                            <span className="px-3 text-black-50">/</span>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                            </div>
                        </div>

                        <hr />

                        <Link to={`/berita-detail/${slug}`} className="readmore stretched-link"><span>Read More</span><i
                            className="bi bi-arrow-right"></i></Link>

                    </div>

                </div>
            </div></>
    )
}

export default CardBerita