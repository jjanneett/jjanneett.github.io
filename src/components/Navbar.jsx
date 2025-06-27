import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function CustomNavbar() {
    return (
        <BSNavbar bg="dark" variant="dark" expand="lg" className="shadow-lg">
            <Container>
                <BSNavbar.Brand as={NavLink} to="/" className="fw-bold">i-turtle</BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="lab-navbar-nav" />
                <BSNavbar.Collapse id="lab-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" end>홈</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">연구실 소개</Nav.Link>
                        <Nav.Link as={NavLink} to="/professor">교수님 소개</Nav.Link>
                        <Nav.Link as={NavLink} to="/researchers">연구원 소개</Nav.Link>
                        <Nav.Link as={NavLink} to="/papers">논문</Nav.Link>
                        <Nav.Link as={NavLink} to="/notices">공지사항</Nav.Link>
                        <Nav.Link as={NavLink} to="/qna">Q&A</Nav.Link>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
}
export default CustomNavbar;
