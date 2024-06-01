import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "../Views/Home/Home.jsx"
import Ofertas from "../Views/Ofertas/Ofertas.jsx"
import Contacto from "../Views/Contacto/Contacto.jsx"
import Categorias from "../Views/Categorias/Categorias.jsx"
import NavBar from "../components/NavBar/NavBar.jsx"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer.jsx"

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Ofertas" element={<Ofertas />}/>
                <Route path="/Contacto" element={<Contacto />}/>
                <Route path="/category/:id" element={<Categorias/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter