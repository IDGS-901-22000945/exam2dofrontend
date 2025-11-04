import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const LayoutPublic = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/items?search=${query}`);
  };

  const showSearchBar =
    location.pathname.startsWith("/items") && location.pathname !== "/";

  return (
    <div>
      <nav className="navbar navbar-dark shadow-sm py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100 mb-2 mb-md-0">
            <Link className="navbar-brand fw-bold text-white fs-4" to="/">
              El Bazar de Jaqueline
            </Link>
            <Link to="/sales" className="btn btn-outline-light fw-semibold">
              Compras
            </Link>
          </div>

          {showSearchBar && (
            <form
              onSubmit={handleSearch}
              className="d-flex w-100 mt-2 mt-md-0"
            >
              <input
                type="text"
                placeholder="Buscar productos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="form-control"
              />
              <button
                type="submit"
                className="btn btn-light text-primary fw-semibold ms-2"
              >
                Buscar
              </button>
            </form>
          )}
        </div>
      </nav>

      <main className="container py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPublic;