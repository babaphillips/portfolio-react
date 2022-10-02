function Nav({ setPage }) {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a onClick={() => setPage("about")}>About me</a>
          <a onClick={() => setPage("portfolio")}>Portfolio</a>
          <a href="resume">Resume</a>
          <a onClick={() => setPage("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
