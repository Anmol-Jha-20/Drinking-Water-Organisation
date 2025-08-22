import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
