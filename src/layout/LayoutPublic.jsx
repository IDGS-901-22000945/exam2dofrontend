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
      <nav className="navbar navbar-dark shadow-sm py-3" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100 flex-wrap gap-2">
            <Link className="navbar-brand fw-bold text-white fs-4 m-0" to="/">
              El Bazar de Jaqueline
            </Link>
            
            <Link to="/sales" className="btn btn-outline-light fw-semibold">
              Compras
            </Link>
          </div>

          {showSearchBar && (
            <form
              onSubmit={handleSearch}
              className="d-flex w-100 mt-3 gap-2"
            >
              <input
                type="text"
                placeholder="Buscar productos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="form-control form-control-lg"
              />
              <button
                type="submit"
                className="btn btn-light text-primary fw-semibold px-4"
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