import {BrowserRouter, Routes, Route} from "react-router-dom"

import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Ofertas from "../Views/Ofertas/Ofertas.jsx"
import Contacto from "../Views/Contacto/Contacto.jsx"
import NavBar from "../components/NavBar/NavBar.jsx"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer.jsx"

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/Ofertas" element={<Ofertas />}/>
                <Route path="/Contacto" element={<Contacto />}/>
                <Route path="/category/:categoria" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter