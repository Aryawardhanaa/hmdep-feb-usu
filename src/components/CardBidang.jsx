import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalProgram from "./ModalProgram";

const CardBidang = ({ data, nama_bidang, image }) => {
    const [modalShow, setModalShow] = useState(false);
    const [bidang, setbidang] = useState('')
    // const [modalState, setModalState] = useState({
    //     modalShow: false,
    //     bidang: ''
    //   });
    const newdata = data.filter((val, i) => val.bidang === bidang)

    return (
        < >
            <div className="  card-bidang  d-flex align-items-center "    >
                {/* <img src={`/assets/img/${image}`} alt="Notebook" className={'rounded-custom'} style={{ width: "100%" }} /> */}
                <img src={`${image}`} alt="Notebook" className={'rounded-custom'} style={{ width: "100%" }} />
                <ButtonDetail setModalShow={setModalShow} setbidang={setbidang} nama_bidang={nama_bidang} />
                <div className="card-body text-white align-items-center content rounded-custom " style={{ height: "100%" }}>
                    <h3 className="card-title text-center font-bold w-75">Bidang {nama_bidang}</h3>
                </div>

            </div>
            <ModalProgram
                show={modalShow}
                data={newdata}
                bidang={bidang}
                onHide={() => setModalShow(false)}
            />
        </ >
    )
}
const ButtonDetail = ({ setModalShow, setbidang, nama_bidang }) => {
    return (
        <div className="d-flex justify-content-center" style={{ position: "absolute", zIndex: "9", width: "100%" }}>
            <Button variant="warning" size="lg" onClick={() => {
                setModalShow(true)
                setbidang(nama_bidang)
            }}>
                Detail
            </Button>
        </div>
    )
}
export default CardBidang