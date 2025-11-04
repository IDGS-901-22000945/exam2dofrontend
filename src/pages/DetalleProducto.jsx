import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch(`https://backend-exam-production-5d9d.up.railway.app/api/items/${id}`)
      .then((res) => res.json())
      .then(setProducto)
      .catch(console.error);
  }, [id]);

  const handleComprar = async () => {
    if (!producto || !producto.id) {
      alert("Producto inválido");
      return;
    }

    const resp = await fetch("https://backend-exam-production-5d9d.up.railway.app/api/addSale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: producto.id }),
    });

    if (resp.ok) {
      setMensaje("Compra registrada correctamente");
    } else {
      setMensaje("Error al registrar la compra");
    }
  };

  if (!producto)
    return <p className="text-center text-muted mt-5">Cargando...</p>;

  return (
    <div
      className="container py-5"
      style={{ backgroundColor: "#f9f7fb", borderRadius: "16px" }}
    >
      <div className="row align-items-start shadow p-4 rounded-4 bg-white">
        <div className="col-md-6 mb-4 mb-md-0">
          <div
            id="carouselImages"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded-4 shadow-sm">
              {(producto.images && producto.images.length > 0
                ? producto.images
                : [producto.thumbnail || producto.image]
              ).map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={img}
                    alt={`imagen-${index}`}
                    className="d-block w-100"
                    style={{
                      maxHeight: "400px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselImages"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselImages"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        <div className="col-md-6 ps-md-5">
          <h2 className="fw-bold mb-3" style={{ color: "#6a4c93" }}>
            {producto.title}
          </h2>
          <p className="text-secondary mb-4">{producto.description}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item border-0">
              <strong>Marca:</strong> {producto.brand || "N/A"}
            </li>
            <li className="list-group-item border-0">
              <strong>Categoría:</strong> {producto.category || "N/A"}
            </li>
            <li className="list-group-item border-0">
              <strong>Stock:</strong> {producto.stock || "Sin datos"}
            </li>
            <li className="list-group-item border-0">
              <strong>Garantía:</strong> {producto.warrantyInformation || "N/A"}
            </li>
            <li className="list-group-item border-0">
              <strong>Envío:</strong> {producto.shippingInformation || "N/A"}
            </li>
            <li className="list-group-item border-0">
              <strong>Política de devolución:</strong> {producto.returnPolicy || "N/A"}
            </li>
          </ul>

          <div className="mb-3">
            <span className="fs-3 fw-bold" style={{ color: "#9b5de5" }}>
              ${producto.price?.toFixed(2)}
            </span>
            {producto.discountPercentage && (
              <span
                className="ms-3 fw-semibold"
                style={{ color: "#f15bb5" }}
              >
                {producto.discountPercentage}% OFF
              </span>
            )}
          </div>

          <button
            onClick={handleComprar}
            className="btn text-white fw-semibold px-4 py-2 shadow-sm"
            style={{
              backgroundColor: "#9b5de5",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Comprar ahora
          </button>

          {mensaje && (
            <div
              className="alert mt-4 text-center fw-semibold"
              style={{
                backgroundColor: "#f4e1ff",
                color: "#6a4c93",
                border: "none",
              }}
            >
              {mensaje}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;