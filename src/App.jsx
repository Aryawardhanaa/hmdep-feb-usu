import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageLayout from "./layout/PageLayout";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PageLayout />}>
          <Route path="/hubungi-kami" element={<Contact />} />
        </Route>
      </Routes >
    </>
  )
}

export default App
