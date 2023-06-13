import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Outlet} from 'react-router-dom';

export default function NavBarComponent() {
    return (
        <>
            <Navbar className="navBg" expand="lg" variant="dark">
                <Navbar.Brand href="/">MilkStgo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav className="ml-auto navbar-links">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <NavDropdown title="Acopio" id="menu1">
                            <NavDropdown.Item as={Link} to="/file-upload-acopio">Subir Acopio</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/list-Acopio">Ver Datos</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Laboratorio" id="menu2">
                            <NavDropdown.Item as={Link} to="/file-upload-laboratorio">Subir Laboratorio</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/list-laboratorio">Ver Datos</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Proveedores" id="menu3">
                            <NavDropdown.Item as={Link} to="/new-proveedor">Subir Proveedor</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/list-proveedor">Ver Datos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/planilla">Planilla</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <section>
                <Outlet />
            </section>
        </>
    );
};
