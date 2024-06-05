import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cartWidget from "../../assets/img/cart3.svg"
import { Link } from 'react-router-dom';
Link

function NavBar () {
  return (
    <Navbar data-bs-theme="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to= {`/`}>LyA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={`/`}>Home</Nav.Link>
            <Nav.Link as={Link} to={`/ofertas`}>Ofertas</Nav.Link>
            <Nav.Link as={Link} to={`/contacto`}>Contacto</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-Categorias">
              <NavDropdown.Item as={Link} to= {`/category/categoryId`}>Gaseosas</NavDropdown.Item>
              <NavDropdown.Item href="/category/Cervezas">Cervezas</NavDropdown.Item>
              <NavDropdown.Item href="/category/Aperitivos">Aperitivos</NavDropdown.Item>
              <NavDropdown.Item href="/category/Vinos">Vinos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category/Almacen">Almacen</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div>
        <img src={cartWidget} alt="cartwidget"/>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar