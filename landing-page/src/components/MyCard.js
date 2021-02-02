import { Card, Col, Button } from 'react-bootstrap';

const MyCard = (props) => {
    return <Col sm={12} md={3}>
            <Card className="mx-auto mb-3">
                <Card.Img variant="top" src={props.img} />
                <Card.Body style={{padding: 0}}>
                    <Card.Title style={{paddingTop: "1.25rem"}}>{props.title}</Card.Title>
                    <Card.Text style={{padding: "1.25rem"}}>
                        In this picture you can see a random {props.text} 
                    </Card.Text>
                    <hr style= {{width: "100%" }} />
                    <Button style={{paddign:"1.25rem", marginBottom: "1rem"}} variant="primary">Find out more!</Button>
                </Card.Body>
            </Card>
        </Col>
}

export default MyCard;