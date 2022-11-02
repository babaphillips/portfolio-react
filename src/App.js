import { useState } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import { useMediaQuery } from "react-responsive";

function App() {
  const [page, setPage] = useState("about");
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <>
      <Header setPage={setPage} />
      <Main page={page} className="main" />

      <Footer />
    </>
  );
}

export default App;
