import Nav from "../Nav";

export default function Header(props) {
  return (
    <header>
      <h1>Amanda</h1>
      <Nav setPage={props.setPage} />
    </header>
  );
}
