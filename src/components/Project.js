import { Row } from "react-bootstrap";
import ProjectCSS from '../css/Project.css';

const Project = (props) => {

    const proj = props.proj; 

    return (
        <Row className="p-3 m-3 border">
            <h3><a href={`${proj.live_link}`}>{proj.name}</a></h3>
            <Row className="ml-3">
                <h5>{proj.description}</h5>
            </Row>
        </Row>
    );
}

export default Project; 