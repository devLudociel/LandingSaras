import './App.css'
import Hero from "./components/Hero/Hero"
import Servicio from "./components/Servicio/Servicio"
import Ask from "./components/AskFrecuency/Ask"
import Contacto from "./components/Contacto/Contacto"
import{BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Hero />} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
