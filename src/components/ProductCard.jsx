import { useState } from "react";
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import ModalsProduct from "./ModalsProduct";

const ProductCard = ({ text, image }) => {
    const [modalShow, setModalShow] = useState(false);
    const [slug, setslug] = useState('');
    const data = localStorage.getItem('products') ?? undefined
    return (
        <>
            <Card style={{ width: 'fit-content', borderRadius: ".75rem", boxShadow: "0px 1px 5px rgba(31, 31, 31, 0.15)" }}>
                <Link>
                    <div style={{ height: "fit-content", padding: "1.2rem .5rem", borderRadius: ".75rem" }}>
                        <Button variant="white" onClick={() => {
                            setModalShow(true); setslug(text)
                        }}>
                            <img style={{ width: "180px" }} className='rounded-semi' src={`${image}`} alt="" />
                        </Button>
                        <Card.Title className="d-flex mt-3 justify-content-center"><b>{text}</b></Card.Title>
                    </div>
                </Link>
            </Card>
            {
                data ?
                    <ModalsProduct
                        show={modalShow}
                        slug={slug.toLowerCase()}
                        onHide={() => setModalShow(false)}
                    /> : null
            }
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