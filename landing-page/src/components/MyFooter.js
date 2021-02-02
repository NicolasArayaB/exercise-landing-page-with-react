import { Footer, Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
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

export default MyFooter;
