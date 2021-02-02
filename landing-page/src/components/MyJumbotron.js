import { Jumbotron, Col, Button } from 'react-bootstrap';

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

export default MyJumbotron;
