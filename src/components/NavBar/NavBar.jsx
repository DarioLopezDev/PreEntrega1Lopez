import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar () {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">LyA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Ofertas">Ofertas</Nav.Link>
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-Categorias">
              <NavDropdown.Item href="#action/3.1">Gaseosas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cervezas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Aperitivos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Vinos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">Almacen</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar