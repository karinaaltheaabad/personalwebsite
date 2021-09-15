import React from 'react';
import { Row, Col } from 'react-bootstrap';
import KarinaImage from '../images/karina_portrait.jpeg';
import IntroCSS from '../css/Intro.css'

const Intro = (props) => {
    return (
        <Row>
            <Col sm={12} md={12} lg={6} className="mb-3">
                <img
                    src={KarinaImage}
                    alt="karina-whole"
                    id="main-image"
                />
            </Col>
            <Col sm={12} md={12} lg={6} className="mb-3 pb-5 border">
                <Col>
                    <h1 id="header" className="d-flex justify-content-center">
                        "A Software Engineer with a mission to empower women and minorities in engineering and STEM." 
                    </h1>
                </Col>
                <Col className="mt-5">
                    <h4 id="subheader" className="px-5 d-flex justify-content-center">
                        Born in the Philippines, I embody my filipina identity while immersing with the different cultures around me. 
                        My goal is to prosper despite all challenges.
                        I thrive within the company of others, and embrace vulnerability to show love, strength and compassion.
                        After work, you can find me dabbling with new technologies, reading or catching up with friends over food and drinks.                
                    </h4>
                </Col>
            </Col>
        </Row>
    )
}

export default Intro; 