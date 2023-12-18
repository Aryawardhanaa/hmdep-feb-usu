import { Outlet, useLocation } from "react-router-dom"
import Footer from "../section/Footer"
import Header from "../section/Header"

const PageLayout = () => {
    const { pathname } = useLocation()

    const breadcrumb = pathname == '/hubungi-kami' ? 'Kritik dan Saran' : pathname == '/berita' ? 'Berita' : ''
    return (
        <>
            <Header />
            <main id="main">
                <div
                    className="breadcrumbs d-flex align-items-center"
                    style={{
                        backgroundImage: "url(/assets/img/allpengurus2.jpg)"
                    }}
                >
                    <div
                        className="container position-relative d-flex flex-column align-items-center"
                        data-aos="fade"
                    >
                        <h2>{breadcrumb}</h2>
                        <ol>
                            <li>
                                <a href="index.html">Beranda</a>
                            </li>
                            <li>{breadcrumb}</li>
                        </ol>
                    </div>
                </div>
                <Outlet />
            </main>
            <Footer />

        </>
    )
}

export default PageLayout