import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import ContactCSS from '../css/Contact.css';

const Contact = () => {

    return (
        <Container className="mt-5">
            <Row>
                <Col className="m-5 border-right">
                    <h1>Get in touch</h1>
                    <Col className="mt-3 d-flex justify-content-center">
                        <p>
                            I'd love to get to know and connect with you!  
                        </p>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <p>
                            Please don't hesitate to reach out, talk to you soon! :)
                        </p>
                    </Col>
                </Col>
                <Col className="mt-4">
                    <Form action="https://submit-form.com/i1YUS5Rl">
                        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="form-text">Full Name</Form.Label>
                            <Form.Control type="name" placeholder="Rachel Green" name="name"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="form-text">Message</Form.Label>
                            <Form.Control as="textarea" rows={3} name="message" placeholder="Let's work together!"/>
                        </Form.Group>
                        <Button type="submit" variant="primary" size="sm">
                        Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;