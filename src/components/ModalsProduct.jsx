import { Button, Modal, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import useQuery from "../hooks/useQuery";
import { getProductBySlug } from "../api";
import { useState } from "react";

const ModalsProduct = (props) => {
    // console.log(props.slug);
    const data = JSON.parse(localStorage.getItem('products')).find((v) => v.slug === props.slug)
    // const value = data.map((s,i)=>s.startsWith('harga'))
    // if (data) {

    //     console.log(data.harga);
    // }

    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                contentClassName='bg-semiwarning'
            >
                <Modal.Body>
                    <div className="container p-3">
                        <div className="row justify-content-between px-4">
                            <div className="col-3">
                                <h4 className="px-2 py-2">Top Up {data ? data.nama : ''}</h4>
                                <div className="card p-3">
                                    <img style={{ height: "fit-content" }} className='rounded-semi' src={data ? data.gambar : ''} alt="" />
                                </div>
                            </div>
                            <div className="col-9 ">
                                <h4 className=" py-2">Daftar Nominal</h4>
                                {
                                    data ? data.harga.map((val, index) =>
                                        <div key={index}>
                                            <b className="px-2 my-3">{val.name}</b>
                                            <div className=" my-3  flex" style={{ display: "grid", gap: "10px", gridTemplateColumns: '1fr 1fr 1fr' }}>
                                                {
                                                    val.value.map((price, ip) =>
                                                        <div key={ip} className="card d-flex flex-row justify-content-between p-3">  <span>{price.durasi}</span> <span>{price.harga}</span></div>
                                                    )
                                                }

                                            </div>
                                        </div>
                                    ) : null
                                }

                                <div className="text-end mt-5">
                                    <Link to={'/'} className="btn btn-warning px-5 py-2">Pesan Sekarang</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default ModalsProduct