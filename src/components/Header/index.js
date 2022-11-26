import titleImage from "../../assets/title1.png";
import { Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header({ setPage }) {
  return (
    <Navbar expand="lg">
      <Image src={titleImage} alt="Amanda logo" fluid className="mb-2 logo" />

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav">
          <Nav.Link onClick={() => setPage("about")}>About me</Nav.Link>
          <Nav.Link onClick={() => setPage("portfolio")}>Portfolio</Nav.Link>
          <Nav.Link href="https://docs.google.com/document/d/e/2PACX-1vSuyyQ5AyAlOdjr8qbDFnHyl88qAemqk7ydN8umjCaKh6u1cYyG4v2aljRjr8k93LPEVmvReaMLqRy8/pub">
            Resume
          </Nav.Link>
          <Nav.Link onClick={() => setPage("contact")}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
