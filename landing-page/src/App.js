import './App.css';
import { Container, Button, Row, Col, Navbar, Nav, Jumbotron, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

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

const MyJumbotron = () => {
    return(
    <Col>
        <Jumbotron sm={12}>
            <h1>Welcome to my landing page</h1>
            <p>
                In this excercise, I'm using for the first time React. I also implemented React Bootstrap and Bootstrap to make this landing page.
                There is so much to learn of this awesome framework, but it makes so much easier with this additional tools.
            </p>
            <p>
              <Button variant="primary">Call to action!</Button>
            </p>
        </Jumbotron>
    </Col>
    );
}

const MyCard = (props) => {
    return <Col sm={12} md={3}>
            <Card className="mx-auto mb-3">
                <Card.Img variant="top" src={props.img} />
                <Card.Body style={{padding: 0}}>
                    <Card.Title style={{padding: "1.25rem"}}>{props.title}</Card.Title>
                    <Card.Text style={{padding: "1.25rem"}}>
                        In this picture you can see a random {props.text} 
                    </Card.Text>
                    <hr style= {{width: "100%" }} />
                    <Button style={{paddign:"1.25rem", marginBottom: "1rem"}} variant="primary">Find out more!</Button>
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
            <MyNavbar />
            <Container>
                <Row className="m-5"/>
                <Row>
                    <MyJumbotron />
                </Row>
                <Row>
                    <MyCard img="https://placeimg.com/640/480/arch" title="Architecture" text="building. Sometimes I lose notion of time looking at them, some of them are really pieces of art" />
                    <MyCard img="https://placeimg.com/640/480/nature" title="Nature" text="scenary. Saddly, everyday hundreds of miles of this beautifull landscapes are being destroyed." />
                    <MyCard img="https://placeimg.com/640/480/animals" title="Animals" text="animal. It's amazing how they can give you such joy, just be looking at them, even in a picture" />
                    <MyCard img="https://placeimg.com/640/480/people" title="People" text="person. We have the responsability of take care of our world, but also, of having fun doing it." />
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
