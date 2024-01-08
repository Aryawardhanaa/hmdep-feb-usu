import { Spinner } from "react-bootstrap";
import useMutation from "../hooks/useMutation";

function ubahFormatObjek(objek) {
    return JSON.parse(JSON.stringify(objek).replace(/"([^"]+)":/g, '"$1":'));
}

const Contact = () => {
    const { data, error, isLoading, mutate } = useMutation();

    if (isLoading) return <Spinner animation="border" variant="warning" />

    const onsubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target)
        const formdata = Object.fromEntries(data.entries())
        // const objekHasil = ubahFormatObjek(formdata);
        // console.log(objekHasil);
        mutate(formdata);
    };

    return (
        <>
            <section id="contact" className="contact">
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
                                onSubmit={onsubmit}
                                className="php-email-form"
                            >
                                <div className="row gy-4">
                                    <div className="col-lg-6 form-group">
                                        <label htmlFor="nama" className="form-label">Nama</label>
                                        <input
                                            type="text"
                                            name="nama"
                                            className="form-control"
                                            id="nama"
                                            placeholder="Masukkan Nama"
                                            required=""
                                        />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Masukkan Email"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subjek" className="form-label">Subjek</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subjek"
                                        id="subjek"
                                        placeholder="Masukkan Subjek"
                                        required=""
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pesan" className="form-label">Pesan</label>

                                    <textarea
                                        className="form-control"
                                        name="pesan"
                                        rows={5}
                                        placeholder="Masukkan Pesan"
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>

                                <div className="text-end">
                                    <button disabled={isLoading} type="submit">Kirim Pesan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default Contact