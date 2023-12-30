import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageLayout from "./layout/PageLayout";
import Berita from "./pages/Berita";
import BeritaDetail from "./pages/BeritaDetail";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import Modal from "./components/Modal";
import ProductList from "./section/ProductList";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PageLayout />}>
          <Route path="/hubungi-kami" element={<Contact />} />
          <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
          <Route path="/berita-detail/:slug" element={<BeritaDetail />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/product-list" element={<ProductList />} />
        </Route>

        {/* <Modal /> */}
      </Routes >
    </>
  )
}

export default App
