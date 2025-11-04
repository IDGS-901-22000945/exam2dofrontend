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
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold text-white fs-4" to="/">
            El Bazar de Jaqueline
          </Link>

          {showSearchBar && (
            <form
              onSubmit={handleSearch}
              className="d-flex mx-auto w-50 justify-content-center"
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

          <Link to="/sales" className="btn btn-outline-light fw-semibold">
            Compras
          </Link>
        </div>
      </nav>

      <main className="container py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPublic;
