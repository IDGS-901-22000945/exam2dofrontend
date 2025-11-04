import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-warning shadow-md py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand fw-bold text-white" to="/">
          Bazar Jaqueline
        </Link>
        <div className="d-flex gap-3">
          <Link className="btn btn-outline-light fw-semibold" to="/sales">
            Compras
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;