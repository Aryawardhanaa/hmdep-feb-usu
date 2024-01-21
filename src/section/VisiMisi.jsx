
const VisiMisi = ({ data }) => {
    // console.log(data[0]);
    return (
        <><section id="alt-services" className="alt-services">
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-between gy-4">
                    <div className="col-lg-6 img-bg"
                        style={{ backgroundImage: "url(/assets/img/DSC_0073.jpg)" }}
                        data-aos="zoom-in"
                        data-aos-delay="100"></div>

                    <div className="col-lg-5 d-flex  flex-column justify-content-center">
                        <h3 className="text-center">Visi HMDEP</h3>

                        <p className="text-center testimonials ">
                            <div className="testimonial-item bg-semiwarning" style={{ padding: "unset", margin: "unset", minHeight: "unset", boxShadow: "unset" }}>
                                <i className="bi bi-quote quote-icon-left"></i>
                                {data[0].visi}
                                <i className="bi bi-quote quote-icon-right"></i>
                            </div>
                        </p>
                        <h3 className="text-center mt-5">Misi HMDEP</h3>


                        {data[0].misi.map((val, i) => (

                            <div key={i} className="icon-box d-flex mt-0 position-relative" data-aos="fade-up" data-aos-delay="100">
                                <i className={`bi ${i == 0 ? 'bi-easel ' : i % 2 == 1 ? 'bi-patch-check ' : 'bi-brightness-high '} flex-shrink-0`}></i>
                                <div>
                                    <p>{val.text}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section></>
    )
}

export default VisiMisi