
const Contact = () => {
    return (
        <><section id="contact" className="contact">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="section-header">
                    <h2>Kritik dan Saran</h2>

                </div>
                <div className="row gy-4 mt-1">
                    <div className="col-lg-6 ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1276371923996!2d98.65427391082089!3d3.5580603964012094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fe177b1bbc3%3A0xaed26a999710359!2sFaculty%20of%20Economics%20and%20Business%20-%20University%20of%20North%20Sumatera!5e0!3m2!1sen!2sus!4v1702907899036!5m2!1sen!2sus"
                            frameBorder={0}
                            style={{ border: 0, width: "100%", height: 500 }}
                            allowFullScreen=""
                        />
                    </div>
                    <div className="col-lg-6">
                        <form
                            action="forms/contact.php"
                            method="post"
                            role="form"
                            className="php-email-form"
                        >
                            <div className="row gy-4">
                                <div className="col-lg-6 form-group">
                                    <label for="name" className="form-label">Nama</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        required=""
                                    />
                                </div>
                                <div className="col-lg-6 form-group">
                                    <label for="email" class="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="subject" class="form-label">Subjek</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    required=""
                                />
                            </div>
                            <div className="form-group">
                                <label for="message" class="form-label">Pesan</label>

                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows={5}
                                    placeholder="Message"
                                    required=""
                                    defaultValue={""}
                                />
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">
                                    Your message has been sent. Thank you!
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                    {/* End Contact Form */}
                </div>
            </div>
        </section></>
    )
}

export default Contact