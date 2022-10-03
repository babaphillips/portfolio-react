function Nav({ setPage }) {
  return (
    <nav>
      <ul>
        <li>
          <a onClick={() => setPage("about")}>About me</a>
          <a onClick={() => setPage("portfolio")}>Portfolio</a>
          <a href="https://docs.google.com/document/d/e/2PACX-1vSuyyQ5AyAlOdjr8qbDFnHyl88qAemqk7ydN8umjCaKh6u1cYyG4v2aljRjr8k93LPEVmvReaMLqRy8/pub">
            Resume
          </a>
          <a onClick={() => setPage("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
