import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageLayout from "./layout/PageLayout";
import Berita from "./pages/Berita";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PageLayout />}>
          <Route path="/hubungi-kami" element={<Contact />} />
          <Route path="/berita" element={<Berita />} />
        </Route>
      </Routes >
    </>
  )
}

export default App
