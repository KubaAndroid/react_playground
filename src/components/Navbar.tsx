import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar(){
    return(
        <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Menu
                    </Nav.Link>
                    <Nav.Link to="/order" as={NavLink}>
                        Order
                    </Nav.Link>
                    <Nav.Link to="/contact" as={NavLink}>
                        Contact
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBS>
    )
}