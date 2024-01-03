import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useQuery from '../hooks/useQuery';
import { getBerita } from '../api';
import { Spinner } from 'react-bootstrap';
import CardBerita from '../components/CardBerita';

const Berita = () => {
    const {
        data: berita = [],
        isLoading,
        isSuccess,
        error,
        refetch,
    } = useQuery(getBerita);

    if (isLoading) return <Spinner animation="border" variant="warning" />

    return (
        <>
            {/* ======= Blog Section ======= */}
            <section id="blog" className="blog">
                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row gy-4 posts-list">
                        {
                            berita?.data?.map((item, index) => (
                                <CardBerita slug={item.slug} author={item.author} created_at={item.created_at} judul={item.judul} image={item.url_gambar1} key={index} />
                            ))
                        }
                    </div>
                    {/* End blog posts list */}
                    <div className="blog-pagination">
                        <ul className="justify-content-center">
                            <li>
                                <Link to="#">1</Link>
                            </li>
                            <li className="active">
                                <Link to="#">2</Link>
                            </li>
                            <li>
                                <Link to="#">3</Link>
                            </li>
                        </ul>
                    </div>
                    {/* End blog pagination */}
                </div>
            </section>
            {/* End Blog Section */}
        </>

    )
}

export default Berita