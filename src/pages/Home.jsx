import React from 'react'
// import Banner from '../section_old/Banner'
// import Navbar from '../section_old/Navbar'
// import Content from '../section_old/Content'
// import Footer from '../section_old/Footer'
// import Team from '../section_old/Team'
import Header from '../section/Header'
import Hero from '../section/Hero'
import Main from '../section/Main'
import Footer from '../section/Footer'
import Preloader from '../section/Preloader'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Main />
            <Footer />
            <a
                href="#"
                className="scroll-top d-flex align-items-center justify-content-center active"
            >
                <i className="bi bi-arrow-up-short" />
            </a>

            {/* <Preloader /> */}
        </>


    )
}

export default Home