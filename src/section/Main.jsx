import { getVisiMisiBPH } from "../api"
import Loading from "../components/Loading"
import useQuery from "../hooks/useQuery"
import Berita from "./Berita"
import Contact from "./Contact"
import ProductList from "./ProductList"
import Team from "./Team"
import Testimoni from "./Testimoni"
import VisiMisi from "./VisiMisi"

const Main = () => {
    const {
        data: data = [],
        isLoading,
        isSuccess,
        error,
        refetch,
    } = useQuery(getVisiMisiBPH);

    if (isLoading) {
        return <Loading />
    }

    const { databph, visimisi } = data
    return (
        <>
            <main id="main">

                <VisiMisi data={visimisi} />
                <Team data={databph} />
                <Testimoni />
                <ProductList />
                <Berita />
                <Contact />


            </main >
        </>
    )
}

export default Main