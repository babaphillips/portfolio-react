import About from "../About";
import ContactForm from "../Contact";
import Portfolio from "../Portfolio";

export default function Main({ page }) {
  function renderPage() {
    if (page === "about") {
      return <About />;
    } else if (page === "portfolio") {
      return <Portfolio />;
    } else if (page === "contact") {
      return <ContactForm />;
    }
  }
  return <>{renderPage()}</>;
}
