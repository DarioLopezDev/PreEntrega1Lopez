import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from "./assets/img/logo.png"
import cartWidget from "./assets/img/cart3.svg"
import './App.css'
import NavBar from "./components/NavBar.jsx";


function App() {
  return (
    <nav className='navbartop'>
      <div className='logoPrincipal'>
        <img src={logo} alt="logoPrincipal" />
      </div>
      <div>
        <Router>
          <NavBar />
        </Router>
      </div>
      <div className='cartWidget'>
        <img src={cartWidget} alt="cartwidget" />
      </div>
    </nav>
  )
}

export default App
