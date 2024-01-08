import Berita from "./Berita"
import Contact from "./Contact"
import ProductList from "./ProductList"
import Team from "./Team"
import Testimoni from "./Testimoni"
import VisiMisi from "./VisiMisi"

const Main = () => {
    return (
        <>
            <main id="main">

                <VisiMisi />
                <Team />
                <Testimoni />
                <ProductList />
                <Berita />
                <Contact />


            </main >
        </>
    )
}

export default Main