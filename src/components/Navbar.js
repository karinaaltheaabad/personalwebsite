import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import longlogo from '../images/longlogo.png';
import NavbarCSS from '../css/Navbar.css';

const NavBar = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="md" className="mt-3">
                <Navbar.Brand>
                    <img 
                        src={longlogo}
                        alt="logo"
                        className="img-responsive"
                    />
                </Navbar.Brand> 
                <Navbar.Toggle id="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="w-100 justify-content-end">
                        <Link to="/" className="navItem">
                            Home
                        </Link>      
                        <Link to="/projects" className="navItem">
                            Projects
                        </Link>   
                        <Link to="/contact" className="navItem">
                            Contact
                        </Link>           
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavBar; 