import { Outlet } from "react-router-dom"
import Footer from "../section/Footer"
import Header from "../section/Header"

const PageLayout = () => {
    return (
        <>
            <Header />
            <main id="main">
                {/* ======= Breadcrumbs ======= */}
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
                        <h2>Kritik dan Saran</h2>
                        <ol>
                            <li>
                                <a href="index.html">Beranda</a>
                            </li>
                            <li>Kritik dan Saran</li>
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