import { BrowserRouter, Router, Route } from 'react-router-dom';
import logo from "./assets/img/logo.png"
import cartWidget from "./assets/img/cart3.svg"
import circleNumber from "./assets/img/circle-fill.svg"
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import AppRouter from './router/AppRouter.jsx';

function App() {
  return (
    <>
 {/*    <nav className='navbartop'>
      <div className='logoPrincipal'>
        <img src={logo} alt="logoPrincipal" />
      </div>
      <div className='cartWidget'>
        <img src={cartWidget} alt="cartwidget"/>
        <img src={circleNumber} alt="circleNumber"/>
      </div>
    </nav>
    <div className='inventario'> */}
      <AppRouter/>
    {/* </div> */}
    </>
  )
}

export default App
