
const VisiMisi = () => {
    return (
        <><section id="alt-services" className="alt-services">
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-between gy-4">
                    <div className="col-lg-6 img-bg"
                        style={{ backgroundImage: "url(/assets/img/DSC_0073.jpg)" }}
                        data-aos="zoom-in"
                        data-aos-delay="100"></div>

                    <div className="col-lg-5 d-flex flex-column justify-content-center">
                        <h3 className="text-center">Visi HMDEP</h3>

                        <p className="text-center testimonials">
                            <div className="testimonial-item" style={{ padding: "unset", margin: "unset", minHeight: "unset", boxShadow: "unset" }}>
                                <i className="bi bi-quote quote-icon-left"></i>
                                Optimalisasi Himpunan mahasiswa Departemen Ekonomi Pembangunan Universitas Sumatera Utara sebagai wadah pengembangan kemampuan dan potensi mahasiswa jurusan Ekonomi Pembangunan.
                                <i className="bi bi-quote quote-icon-right"></i>
                            </div>
                        </p>
                        <h3 className="text-center mt-5">Misi HMDEP</h3>

                        <div className="icon-box d-flex mt-0 position-relative" data-aos="fade-up" data-aos-delay="100">
                            <i className="bi bi-easel flex-shrink-0"></i>
                            <div>
                                {/* <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4> */}
                                <p>Meningkatkan kesadaran dan pemahaman mahasiswa terhadap konsep dan teori ekonomi melalui kegiatan seminar dan diskusi interaktif.</p>
                            </div>
                        </div>

                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                            <i className="bi bi-patch-check flex-shrink-0"></i>
                            <div>

                                <p>Mengadakan program pengabdian masyarakat untuk menerapkan ilmu ekonomi pembangunan dalam membantu masyarakat sekitar, terutama dalam bidang pengembangan usaha mikro dan menengah.</p>
                            </div>
                        </div>

                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                            <i className="bi bi-brightness-high flex-shrink-0"></i>
                            <div>

                                <p>Membangun jaringan dan kerjasama dengan organisasi-organisasi mahasiswa lainnya, guna meningkatkan sinergi dan kesempatan pengembangan diri bagi anggota organisasi.
                                </p>
                            </div>
                        </div>

                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                            <i className="bi bi-brightness-high flex-shrink-0"></i>
                            <div>

                                <p>Menyelenggarakan kegiatan-kegiatan pengembangan soft skill, seperti pelatihan kepemimpinan, manajemen waktu, dan keterampilan komunikasi, untuk meningkatkan kapasitas anggota dalam bersaing di dunia kerja.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section></>
    )
}

export default VisiMisi