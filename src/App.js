import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [page, setPage] = useState("about");

  return (
    <>
      <Header setPage={setPage} />
      <Main page={page} />
    </>
  );
}

export default App;
