import Nav from "../Nav";

export default function Header(props) {
  return (
    <header>
      <h1>AMANDA PHILLIPS</h1>
      <Nav setPage={props.setPage} />
    </header>
  );
}
