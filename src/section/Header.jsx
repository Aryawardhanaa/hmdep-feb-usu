import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <> <header id="header" className="header d-flex align-items-center">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center">
                    {/* Uncomment the line below if you also wish to use an image logo */}
                    {/* <img src="assets/img/logo.png" alt=""> */}
                    <h1>
                        <img loading="lazy" src="/assets/img/logohmdep.png" />
                    </h1>
                </a>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <Link to={'/'} className="active">
                                Beranda
                            </Link>
                        </li>

                        <li>
                            <a href="services.html">Struktur Organisasi</a>
                        </li>
                        <li>
                            <a href="projects.html">HMDEP SHOP</a>
                        </li>
                        <li>
                            <Link to="/hubungi-kami">Kritik dan Saran</Link>
                        </li>
                        <li>
                            <Link to="/berita">Berita</Link>
                        </li>
                    </ul>
                </nav>
                {/* .navbar */}
            </div>
        </header>
        </>
    )
}

export default Header