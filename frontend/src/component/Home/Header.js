import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

const Header = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark">
        <Container>
          <Navbar.Brand href="/">RESEARCH PRO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {token != null ? (
              <Nav className="me-auto">
                {token.type == "Admin" ? (
                  <Button>
                    <Nav.Link href="/Adminstudentview">Admin Dashboard</Nav.Link>
                  </Button>
                ) : token.type == "Student" ? (
                  <>
                    <Button>
                      <Nav.Link href="/viewgroupsstd">Student Dashboard</Nav.Link>
                    </Button>
                    <Button>
                      <Nav.Link href="/sublinks">Submissions</Nav.Link>
                    </Button>
                  </>
                ) : (
                  <>
                  <Button>
                    <Nav.Link href="/supstaff" style={{ color: "white" }}>Supervisor | Co-Supervisor</Nav.Link>
                  </Button>
                  <Button>
                    <Nav.Link href="/viewtopics" style={{ color: "white" }}>Panel Member</Nav.Link>
                  </Button>  
                  </>
                )}
              </Nav>
            ) : (
              <Nav className="me-auto">
              </Nav>
            )}
            <Nav>
              <Nav.Link eventKey={2}>
                {token != null ? (
                  <Link
                    to="/Userprofile"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <FiUser/> &nbsp;
                    {token.email}
                  </Link>
                ) : (
                  <Button>
                    <Link to="/Userlogin" style={{ textDecoration: "none", color: "white" }}>
                    Login
                  </Link>
                  </Button>
  
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
