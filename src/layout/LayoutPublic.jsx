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

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            {showSearchBar && (
              <form
                onSubmit={handleSearch}
                className="d-flex mx-auto my-2 my-lg-0 w-100 w-lg-50 justify-content-center"
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

            <div className="d-flex ms-auto mt-2 mt-lg-0">
              <Link to="/sales" className="btn btn-outline-light fw-semibold">
                Compras
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPublic;