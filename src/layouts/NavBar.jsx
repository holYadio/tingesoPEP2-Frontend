import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function NavBar(){
    return(
        <>
        <Navbar className="navBg" variant="dark" expand="lg">
            <Navbar.Brand href="/">MilkStgo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavDropdown"/>
            <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <NavDropdown title="Acopio" id="navbarDropdownMenuLink">
                    <NavDropdown.Item as={Link} to="/file-upload-acopio">Subir Acopio</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/list-Acopio">Ver Datos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Laboratorio" id="navbarDropdownMenuLink">
                    <NavDropdown.Item href="/file-upload-laboratorio">Subir Laboratorio</NavDropdown.Item>
                    <NavDropdown.Item href="/list-laboratorio">Ver Datos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Proveedores" id="navbarDropdownMenuLink">
                    <NavDropdown.Item href="/new-proveedor">Subir Proveedor</NavDropdown.Item>
                    <NavDropdown.Item href="/list-proveedores">Ver Datos</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/planilla">Planilla</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

        <section>
            <Outlet/>
        </section>
        </>
    );
}
export default NavBar;
