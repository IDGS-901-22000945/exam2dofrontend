import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center px-3">
      <h1 className="display-1 fw-bold text-warning">404</h1>
      <h2 className="fw-semibold mb-3">Page Not Found</h2>
      <p className="text-secondary mb-4">{error?.statusText || error?.message || "La página que buscas no existe."}</p>
      <Link className="btn btn-warning fw-semibold px-4 py-2" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;