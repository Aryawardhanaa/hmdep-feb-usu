import { Spinner } from "react-bootstrap";
import ProductCard from "../components/ProductCard"
import useQuery from "../hooks/useQuery";
import { getAllProduct } from "../api";
import { useEffect, useState } from "react";

const ProductList = () => {
    const [text, setText] = useState('Semua')
    const {
        data: products = [],
        isLoading,
        isSuccess,
        error,
        refetch,
    } = useQuery(getAllProduct);

    // useEffect(() => {
    //     localStorage.setItem('products', JSON.stringify(products))
    // }, [])

    if (isLoading) return <Spinner animation="border" variant="warning" />
    if (isSuccess && products) {
        localStorage.setItem('products', JSON.stringify(products.data))
    }
    const filter = (e) => {
        setText(e.target.innerText.toLowerCase())
    }
    const arr = text == 'Semua' || text == 'semua' ? products.data : products.data.filter((v) => v.kategori === text)
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
                                <button onClick={filter} className={`${text == 'Semua' || text == 'semua' ? 'bg-warning' : 'bg-white'} rounded-semi p-3 px-4 cursor-pointer text-center`}>Semua</button>
                                <button onClick={filter} className={`${text == 'film' ? 'bg-warning' : 'bg-white'} rounded-semi p-3 px-4 cursor-pointer text-center`}>Film</button>
                                <button onClick={filter} className={`${text == 'music' ? 'bg-warning' : 'bg-white'} rounded-semi p-3 px-4 cursor-pointer text-center`}>Music</button>
                                <button onClick={filter} className={`${text == 'design' ? 'bg-warning' : 'bg-white'} rounded-semi p-3 px-4 cursor-pointer text-center`}>Design</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ gap: "1rem" }}>
                    {
                        arr.map((val, key) => (
                            <ProductCard key={key} text={val.nama} image={val.gambar} />
                        ))
                    }

                </div>

            </div>
        </ >
    )
}

export default ProductList