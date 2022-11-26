import { useState } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import { ThemeProvider } from "react-bootstrap";

function App() {
  const [page, setPage] = useState("about");

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Header setPage={setPage} />
      <Main page={page} className="main" />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
