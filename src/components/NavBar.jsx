import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
      <Nav className="Navbar" variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            Ofertas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" disabled>
            Contacto
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Categorias" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1" className='navdropdownitem'>Gaseosas</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" className='navdropdownitem'>Cervezas</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3" className='navdropdownitem'>Aperitivos</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4" className='navdropdownitem'>Vinos</NavDropdown.Item>
        </NavDropdown>
      </Nav>
  );
}

export default NavBar