import { useState } from "react";
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Modals from "./Modals";

const ProductCard = ({ text, image }) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Card style={{ width: 'fit-content', borderRadius: ".75rem", boxShadow: "0px 1px 5px rgba(31, 31, 31, 0.15)" }}>
                <Link>
                    <div style={{ height: "fit-content", padding: "1.2rem .5rem", borderRadius: ".75rem" }}>
                        <Button variant="white" onClick={() => setModalShow(true)}>
                            <img style={{ height: "fit-content" }} className='rounded-semi' src={`/assets/img/${image}`} alt="" />
                        </Button>
                        <Card.Title className="d-flex mt-3 justify-content-center"><b>{text}</b></Card.Title>
                    </div>
                </Link>
            </Card>
            <Modals
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

// return (
//     <>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//             Launch vertically centered modal
//         </Button>

//         <MyVerticallyCenteredModal
//             show={modalShow}
//             onHide={() => setModalShow(false)}
//         />
//     </>
// );
export default ProductCard