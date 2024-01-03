import { Card } from "react-bootstrap"
import ProductCard from "../components/ProductCard"
import Modals from "../components/Modals"

const ProductList = () => {
    return (
        < >
            <div className="container my-5">

                <div className="row">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                        <div className="title-text ">
                            Katalog
                            <div className="bg-warning" style={{ height: "3px", width: "50px" }}></div>
                        </div>
                        <div className="col-12 aos-init aos-animate" data-aos="fade-up">
                            <div className="d-flex text-black my-5" style={{ gap: "2rem" }}>
                                <button className="bg-warning rounded-semi p-3 px-4 cursor-pointer text-center">Semua</button>
                                <button className="bg-white rounded-semi p-3 px-4 cursor-pointer text-center">Merchandise</button>
                                <button className="bg-white rounded-semi p-3 px-4 cursor-pointer text-center">UMKM</button>
                                <button className="bg-white rounded-semi p-3 px-4 cursor-pointer text-center">Gifts</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ gap: "1rem" }}>

                    <ProductCard text={'Viu'} image='viu.webp' />
                    <ProductCard text={'Netflix'} image='netflix.webp' />

                </div>

            </div>
        </ >
    )
}

export default ProductList