import React from 'react';
import { Container } from 'react-bootstrap';
import Intro from './Intro';

const LargeContainer = () => {
    return (
        <Container>
            <Container fluid className="mt-3">
                <Intro />
            </Container>
        </Container>
    )
}

export default LargeContainer;