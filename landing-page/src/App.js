import './App.css';
import { Container, Button, Row, Col, Navbar, Nav, Jumbotron, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const MyCard = (props) => {
    return <Col>
            <Card className="mx-auto mb-3">
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Find out more!</Button>
                </Card.Body>
            </Card>
        </Col>
}

const Footer = () => {
    return <div className="footer">
        <Container fluid className="bg-dark text-light">
            <Row style= {{ height: 40 }}></Row>
            <Row>
                <Col />
                <Col md={6}>
                    <p>Copyright &copy; Your Website {new Date().getFullYear()}</p>
                </Col>
                <Col  />    
            </Row>    
        </Container>
    </div>
}

function App() {
    return (
        <div className="App ">
            <Navbar bg="dark" expand="md">
                <Navbar.Brand href="#" style={{ color: "white" }}>Start Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" style={{ color: "white" }}>Home</Nav.Link>
                        <Nav.Link href="#about" style={{ color: "white" }}>About</Nav.Link>
                        <Nav.Link href="#services" style={{ color: "white" }}>Services</Nav.Link>
                        <Nav.Link href="#contact" style={{ color: "white" }}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Row className="m-0 mt-3">
                    <Col>
                        <Jumbotron fluid>
                            <h1>A Warm Welcome</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id risus finibus, pellentesque risus sit amet, 
                              placerat velit. Donec sem orci, luctus sed sodales et, feugiat non magna. Fusce venenatis, tortor non facilisis sollicitudin, 
                              tellus nulla auctor neque, sit amet tincidunt lorem lectus ac augue.
                            </p>
                            <p>
                              <Button variant="primary">Call to action!</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <MyCard img="https://placeimg.com/640/480/arch" title="Architecture" />
                    <MyCard img="https://placeimg.com/640/480/nature" title="Nature" />
                    <MyCard img="https://placeimg.com/640/480/animals" title="Animals" />
                </Row>
            </Container>
            {Footer()}
        </div>
    );
}

export default App;
