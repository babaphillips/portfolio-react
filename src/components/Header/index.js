// import titleImage from "../../assets/title.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header({ setPage }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <img src={titleImage} class="img-fluid w-100" alt="Amanda logo" /> */}
        <h1>AMANDA PHILLIPS</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setPage("about")}>About me</Nav.Link>
            <Nav.Link onClick={() => setPage("portfolio")}>Portfolio</Nav.Link>
            <Nav.Link href="https://docs.google.com/document/d/e/2PACX-1vSuyyQ5AyAlOdjr8qbDFnHyl88qAemqk7ydN8umjCaKh6u1cYyG4v2aljRjr8k93LPEVmvReaMLqRy8/pub">
              Resume
            </Nav.Link>
            <Nav.Link onClick={() => setPage("contact")}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
