import About from "../About";
import Portfolio from "../Portfolio";

export default function Main({ page }) {
  function renderPage() {
    if (page === "about") {
      return <About />;
    } else if (page === "portfolio") {
      return <Portfolio />;
    }
  }
  return <>{renderPage()}</>;
}
