import { useEffect, useState } from "react";

const Compras = () => {
  const [compras, setCompras] = useState([]);

 useEffect(() => {
  fetch("https://backend-exam-production-5d9d.up.railway.app/api/sales")
    .then((res) => res.json())
    .then(setCompras)
    .catch(console.error);
}, []);

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-warning mb-4 d-flex align-items-center">
        Compras realizadas
      </h2>

      {compras.length === 0 ? (
        <div className="text-center text-muted fs-5 mt-5">
          Aún no hay compras.
        </div>
      ) : (
        <div className="row g-4">
          {compras.map((c) => (
            <div key={c.id} className="col-12 col-sm-6 col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title text-dark fw-semibold mb-2">
                      {c.productTitle}
                    </h5>
                    <p className="card-text text-muted small mb-1">
                      Marca: <span className="fw-medium">{c.productBrand}</span>
                    </p>
                    <p className="card-text text-warning fw-bold fs-5 mb-2">
                      ${c.productPrice?.toFixed(2)}
                    </p>
                  </div>
                  <p className="card-text text-secondary small mt-auto">
                    Fecha:{" "}
                    {new Date(c.date).toLocaleString("es-MX", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Compras;