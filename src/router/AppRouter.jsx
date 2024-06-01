import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "../Views/Home/Home.jsx"
import Ofertas from "../Views/Ofertas/Ofertas.jsx"
import Contacto from "../Views/Contacto/Contacto.jsx"
import Categorias from "../Views/Categorias/Categorias.jsx"
import NavBar from "../components/NavBar/NavBar.jsx"

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Ofertas" element={<Ofertas />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/Categorias" element={<Categorias />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter