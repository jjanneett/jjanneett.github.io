import { useRef } from 'react';
import { Navbar as BSNavbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

function CustomNavbar({ isLoggedIn, handleLogout }) {
    const navigate = useNavigate();
    const navbarRef = useRef();

    // 네비게이션 토글 닫기 함수 (Bootstrap 5)
    const closeNavbar = () => {
        const nav = navbarRef.current;
        if (!nav) return;
        const collapse = nav.querySelector('.navbar-collapse');
        if (collapse && collapse.classList.contains('show')) {
            collapse.classList.remove('show');
            // Bootstrap의 data-bs-toggle 동작용 aria-expanded 속성 처리
            const toggleBtn = nav.querySelector('.navbar-toggler');
            if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
        }
    };

    // 모바일·태블릿에서 메뉴 클릭 시 닫기 이벤트 연결용
    const handleNavClick = () => {
        // NavLink 클릭 시에만 동작
        if (
            typeof window !== "undefined" &&
            (window.innerWidth <= 991)
        ) {
            closeNavbar();
        }
    };

    return (
        <BSNavbar bg="dark" variant="dark" expand="lg" className="shadow-lg" ref={navbarRef}>
            <Container>
                <BSNavbar.Brand as={NavLink} to="/" className="fw-bold" onClick={handleNavClick}>
                    i-turtle
                </BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="lab-navbar-nav" />
                <BSNavbar.Collapse id="lab-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" end onClick={handleNavClick}>홈</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" onClick={handleNavClick}>연구실 소개</Nav.Link>
                        <Nav.Link as={NavLink} to="/professor" onClick={handleNavClick}>교수님</Nav.Link>
                        <Nav.Link as={NavLink} to="/researchers" onClick={handleNavClick}>연구원</Nav.Link>
                        <Nav.Link as={NavLink} to="/papers" onClick={handleNavClick}>논문</Nav.Link>
                        <Nav.Link as={NavLink} to="/notices" onClick={handleNavClick}>공지사항</Nav.Link>
                        <Nav.Link as={NavLink} to="/qna" onClick={handleNavClick}>Q&amp;A</Nav.Link>
                    </Nav>
                    <Nav>
                        {isLoggedIn ? (
                            <Button
                                variant="outline-light"
                                size="sm"
                                className="ms-2"
                                onClick={() => {
                                    handleLogout();
                                    handleNavClick();
                                    navigate("/");
                                }}
                            >
                                로그아웃
                            </Button>
                        ) : (
                            <Button
                                variant="outline-info"
                                size="sm"
                                className="ms-2"
                                onClick={() => {
                                    handleNavClick();
                                    navigate("/login");
                                }}
                            >
                                로그인
                            </Button>
                        )}
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
}

export default CustomNavbar;