import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Nav({ setPage }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setPage("about")}>About me</Nav.Link>
            <Nav.Link onClick={() => setPage("portfolio")}>Portfolio</Nav.Link>
            <Nav.Link href="https://docs.google.com/document/d/e/2PACX-1vSuyyQ5AyAlOdjr8qbDFnHyl88qAemqk7ydN8umjCaKh6u1cYyG4v2aljRjr8k93LPEVmvReaMLqRy8/pub">
              Resume
            </Nav.Link>
            <a onClick={() => setPage("contact")}>Contact</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
