import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const { pathname } = useLocation()

    // const breadcrumb = pathname == '/hubungi-kami' ? 'Kritik dan Saran' : pathname == '/berita' ? 'Berita' : ''
    return (
        <>
            <header id="header" className="header d-flex align-items-center">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <h1>
                            <img loading="lazy" src="/assets/img/logohmdep.png" />
                        </h1>
                    </a>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <Link to={'/'} className={pathname == '/' ? 'active' : ''}>
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link to="/struktur-organisasi" className={pathname == '/struktur-oranisasi' ? 'active' : ''}>Struktur Organisasi</Link>
                            </li>
                            <li>
                                <Link to="/product-list" className={pathname == '/product-list' ? 'active' : ''}>Salut APPS</Link>
                            </li>
                            <li>
                                <Link to="/hubungi-kami" className={pathname == '/hubungi-kami' ? 'active' : ''}>Kritik dan Saran</Link>
                            </li>
                            <li>
                                <Link to="/berita" className={pathname == '/berita' ? 'active' : ''}>Berita</Link>
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