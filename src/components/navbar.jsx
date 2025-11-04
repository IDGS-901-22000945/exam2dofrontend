import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Compras from "../pages/Compras";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-warning shadow-md">
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/">
          Bazar Jaqueline
        </Link>

        <div className="d-flex ms-auto gap-3">
          <Link className="nav-link text-white d-flex align-items-center" to="/">
            <Home size={18} className="me-1" /> Inicio
          </Link>
          <Link className="nav-link text-white d-flex align-items-center" to="/sales">
            <Compras size={18} className="me-1" /> Compras
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;