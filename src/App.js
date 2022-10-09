import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [page, setPage] = useState("about");

  return (
    <>
      <Header setPage={setPage} />
      <Main page={page} />
      <Footer />
    </>
  );
}

export default App;
