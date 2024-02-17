import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <section className="main">
      <Navbar />
      <Outlet />
    </section>
  );
};

export default Main;
