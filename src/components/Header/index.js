import Nav from "../Nav";
import titleImage from "../../assets/title.png";

export default function Header(props) {
  return (
    <header>
      {/* <img src={titleImage} alt="title" class="title" /> */}
      <Nav setPage={props.setPage} />
    </header>
  );
}
