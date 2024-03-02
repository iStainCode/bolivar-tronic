import Home from "./pages/Home"
import About from "./pages/about"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
