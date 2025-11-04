import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Resultados = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search).get("search");

  useEffect(() => {
    if (!query) return;

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://backend-exam-production-5d9d.up.railway.app/api/items?q=${query}`);
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Error ${res.status}: ${text}`);
        }

        const data = await res.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
          console.error("La API no devolvió un array:", data);
        }
      } catch (err) {
        console.error("Error al consumir la API:", err);
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  if (loading) {
    return <p className="text-center py-5">Cargando productos...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-danger py-5">
        Ocurrió un error al cargar los productos: {error}
      </p>
    );
  }

  return (
    <div className="min-vh-100 py-5 px-3 px-md-4" style={{ backgroundColor: "#f8f6fa" }}>
      <h2 className="fw-bold text-center mb-5" style={{ color: "#9b5de5" }}>
        Resultados para: <span style={{ color: "#f15bb5" }}>{query}</span>
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-muted">No se encontraron productos.</p>
      ) : (
        <div className="container">
          <div className="row g-4 justify-content-center">
            {products.map((p) => (
              <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Link to={`/items/${p.id}`} className="text-decoration-none text-dark">
                  <div
                    className="card border-0 shadow-sm h-100"
                    style={{
                      borderRadius: "15px",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    <img
                      src={p.thumbnail || p.image}
                      alt={p.title}
                      className="card-img-top img-fluid"
                      style={{
                        height: "160px",
                        objectFit: "cover",
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-semibold" style={{ color: "#6a4c93" }}>
                        {p.title}
                      </h5>
                      <p className="card-text text-muted small">
                        {p.description?.slice(0, 60)}...
                      </p>
                      <p className="fw-bold" style={{ color: "#f15bb5" }}>
                        ${p.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Resultados;