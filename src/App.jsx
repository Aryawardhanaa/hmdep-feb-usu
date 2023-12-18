import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageLayout from "./layout/PageLayout";
import Berita from "./pages/Berita";
import BeritaDetail from "./pages/BeritaDetail";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PageLayout />}>
          <Route path="/hubungi-kami" element={<Contact />} />
          <Route path="/berita-detail/:slug" element={<BeritaDetail />} />
          <Route path="/berita" element={<Berita />} />
        </Route>
      </Routes >
    </>
  )
}

export default App
