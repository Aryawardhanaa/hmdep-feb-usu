import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalProgram from "./ModalProgram";

const CardBidang = ({ nama_bidang, image }) => {
    const [modalShow, setModalShow] = useState(false);
    const [bidang, setbidang] = useState('')

    return (
        < >
            <div className="  card-bidang  d-flex align-items-center "    >
                <img src={`/assets/img/${image}`} alt="Notebook" className={'rounded-custom'} style={{ width: "100%" }} />
                <div className="d-flex justify-content-center" style={{ position: "absolute", zIndex: "9", width: "100%" }}>
                    <Button variant="warning" size="lg" onClick={() => {
                        setModalShow(true)
                        setbidang(nama_bidang)
                    }}>
                        Detail
                    </Button>
                </div>
                <div className="card-body text-white align-items-center content rounded-custom " style={{ height: "100%" }}>
                    <h3 className="card-title text-center font-bold w-75">{nama_bidang}</h3>
                </div>

            </div>
            <ModalProgram
                show={modalShow}
                bidang={bidang}
                onHide={() => setModalShow(false)}
            />
        </ >
    )
}

export default CardBidang