import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
    return (
    <Navbar fixed="top" bg="dark" expand="md">
        <Navbar.Brand href="#" style={{ color: "white" }}>Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=" border-light justify-content-start navbar-dark" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav style={{ textAlign: "left" }}>
                <Nav.Link href="#home" style={{ color: "white" }}>Home</Nav.Link>
                <Nav.Link href="#about" style={{ color: "white" }}>About</Nav.Link>
                <Nav.Link href="#services" style={{ color: "white" }}>Services</Nav.Link>
                <Nav.Link href="#contact" style={{ color: "white" }}>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default MyNavbar;
