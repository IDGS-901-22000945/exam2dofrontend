import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Compras from "../pages/Compras";

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-white">
        Bazar Jaqueline
      </Link>
      <div className="flex gap-4">
        <Link to="/" className="text-white flex items-center gap-1">
          <Home size={18} /> Inicio
        </Link>
        <Link to="/sales" className="text-white flex items-center gap-1">
          <Compras size={18} /> Compras
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
