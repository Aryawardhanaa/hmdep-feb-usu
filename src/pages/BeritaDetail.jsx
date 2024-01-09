import React, { useEffect, useState } from 'react'
import useQuery from '../hooks/useQuery';
import { getBeritaBySlug } from '../api';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import parse from 'html-react-parser';

const BeritaDetail = () => {
    const { slug: slugparam } = useParams()
    // console.log(slugparam);
    const [post, setPost] = useState({});
    const {
        data: initialPost = [],
        isLoading,
        isSuccess,
        error,
    } = useQuery(() => getBeritaBySlug(slugparam), {
        onSuccess: (data) => {
            console.log(data);
            setPost(data);
        },
    });

    if (isLoading) return <Spinner animation="border" variant="warning" />

    if (error) {
        console.log(error);
        return
    }

    // const [judul, url_gambar1, url_gambar2, konten, author, created_at, kategori, slug] = initialPost.data
    // console.log({ judul, url_gambar1, url_gambar2, konten, author, created_at, kategori, slug });
    console.log(initialPost);

    // return
    // const berita =initialPost.map((val,i)=>)
    const { judul, url_gambar1, konten } = initialPost.data
    console.log(konten);
    return (
        <>
            <section id="blog" className="blog">
                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <article className="blog-details">
                                <div className="post-img">
                                    <img
                                        src={url_gambar1}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <h2 className="title">
                                    {judul}
                                </h2>
                                <div className="meta-top">
                                    <ul>
                                        <li className="d-flex align-items-center">
                                            <i className="bi bi-person" />{" "}
                                            <a href="blog-details.html">John Doe</a>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <i className="bi bi-clock" />{" "}
                                            <a href="blog-details.html">
                                                <time dateTime="2020-01-01">Jan 1, 2022</time>
                                            </a>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <i className="bi bi-chat-dots" />{" "}
                                            <a href="blog-details.html">12 Comments</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* End meta top */}
                                <div className="content">
                                    {/* {konten} */}
                                    {/* <div className=""></div> */}
                                    <Content konten={konten} />
                                </div>

                            </article>

                            <div className="comments">

                                <div className="reply-form">
                                    <h4>Leave a Reply</h4>
                                    <p>
                                        Your email address will not be published. Required fields are
                                        marked *{" "}
                                    </p>
                                    <form action="">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Name*"
                                                />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input
                                                    name="email"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Email*"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col form-group">
                                                <input
                                                    name="website"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Website"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col form-group">
                                                <textarea
                                                    name="comment"
                                                    className="form-control"
                                                    placeholder="Your Comment*"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Post Comment
                                        </button>
                                    </form>
                                </div>
                            </div>
                            {/* End blog comments */}
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-item search-form">
                                    <h3 className="sidebar-title">Search</h3>
                                    <form action="" className="mt-3">
                                        <input type="text" />
                                        <button type="submit">
                                            <i className="bi bi-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="sidebar-item recent-posts">
                                    <h3 className="sidebar-title">Recent Posts</h3>
                                    <div className="mt-3">
                                        <div className="post-item mt-3">
                                            <img src="assets/img/blog/blog-recent-1.jpg" alt="" />
                                            <div>
                                                <h4>
                                                    <a href="blog-details.html">
                                                        Nihil blanditiis at in nihil autem
                                                    </a>
                                                </h4>
                                                <time dateTime="2020-01-01">Jan 1, 2020</time>
                                            </div>
                                        </div>
                                        {/* End recent post item*/}
                                        <div className="post-item">
                                            <img src="assets/img/blog/blog-recent-2.jpg" alt="" />
                                            <div>
                                                <h4>
                                                    <a href="blog-details.html">Quidem autem et impedit</a>
                                                </h4>
                                                <time dateTime="2020-01-01">Jan 1, 2020</time>
                                            </div>
                                        </div>
                                        {/* End recent post item*/}
                                        <div className="post-item">
                                            <img src="assets/img/blog/blog-recent-3.jpg" alt="" />
                                            <div>
                                                <h4>
                                                    <a href="blog-details.html">
                                                        Id quia et et ut maxime similique occaecati ut
                                                    </a>
                                                </h4>
                                                <time dateTime="2020-01-01">Jan 1, 2020</time>
                                            </div>
                                        </div>
                                        {/* End recent post item*/}
                                        <div className="post-item">
                                            <img src="assets/img/blog/blog-recent-4.jpg" alt="" />
                                            <div>
                                                <h4>
                                                    <a href="blog-details.html">
                                                        Laborum corporis quo dara net para
                                                    </a>
                                                </h4>
                                                <time dateTime="2020-01-01">Jan 1, 2020</time>
                                            </div>
                                        </div>
                                        {/* End recent post item*/}
                                        <div className="post-item">
                                            <img src="assets/img/blog/blog-recent-5.jpg" alt="" />
                                            <div>
                                                <h4>
                                                    <a href="blog-details.html">
                                                        Et dolores corrupti quae illo quod dolor
                                                    </a>
                                                </h4>
                                                <time dateTime="2020-01-01">Jan 1, 2020</time>
                                            </div>
                                        </div>
                                        {/* End recent post item*/}
                                    </div>
                                </div>
                                {/* End sidebar recent posts*/}
                                <div className="sidebar-item tags">
                                    <h3 className="sidebar-title">Tags</h3>
                                    <ul className="mt-3">
                                        <li>
                                            <a href="#">App</a>
                                        </li>
                                        <li>
                                            <a href="#">IT</a>
                                        </li>
                                        <li>
                                            <a href="#">Business</a>
                                        </li>
                                        <li>
                                            <a href="#">Mac</a>
                                        </li>
                                        <li>
                                            <a href="#">Design</a>
                                        </li>
                                        <li>
                                            <a href="#">Office</a>
                                        </li>
                                        <li>
                                            <a href="#">Creative</a>
                                        </li>
                                        <li>
                                            <a href="#">Studio</a>
                                        </li>
                                        <li>
                                            <a href="#">Smart</a>
                                        </li>
                                        <li>
                                            <a href="#">Tips</a>
                                        </li>
                                        <li>
                                            <a href="#">Marketing</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* End sidebar tags*/}
                            </div>
                            {/* End Blog Sidebar */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Content = ({ konten }) => {
    const [html, setHtml] = useState("")
    useEffect(() => {
        setHtml(konten)
    }, [html])
    return (
        <div className="">     {parse(html)}        </div>
    )
}
export default BeritaDetail