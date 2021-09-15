import { Container, Row } from 'react-bootstrap';
import Project from './Project';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectsContainer = () => {

    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        axios.get('data.json')
            .then(response => setProjects(response.data.projects));
    }, []);

    let portfolio = projects.map(project => 
        <Project proj={project} key={project.id} />
    );

    return (
        <Container>
            <Row className="p-5">
                {portfolio}
            </Row>
        </Container>
    );
}

export default ProjectsContainer; 