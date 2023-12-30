import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const ProductCard = ({ text, image }) => {
    return (
        <>
            <Card style={{ width: 'fit-content', borderRadius: ".75rem", boxShadow: "0px 1px 5px rgba(31, 31, 31, 0.15)" }}>
                <div style={{ height: "fit-content", padding: "1.2rem .5rem", borderRadius: ".75rem" }}>
                    <Link>
                        <img style={{ height: "fit-content" }} className='rounded-semi' src={`/assets/img/${image}`} alt="" />
                    </Link>
                    <Card.Title className="d-flex mt-3 justify-content-center"><b>{text}</b></Card.Title>
                </div>
            </Card>
        </>
    )
}

export default ProductCard