import './App.css';
import { Container, Button, Row, Col, Navbar, Nav, Jumbotron, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar.js';
import MyCard from './components/MyCard.js';
import MyJumbotron from './components/MyJumbotron.js';
import MyFooter from './components/MyFooter.js';

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
            <MyFooter />
        </div>
    );
}

export default App;
