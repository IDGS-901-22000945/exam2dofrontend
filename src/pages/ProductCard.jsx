const ProductCard = ({ product }) => {
  return (
    <div className="card h-100 border-0 shadow-sm hover-shadow-lg">
      <img
        src={product.thumbnail || product.image}
        alt={product.title}
        className="card-img-top img-fluid rounded-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title fw-semibold text-dark mb-2">
          {product.title}
        </h5>
        <p className="card-text text-muted small mb-3" style={{ height: "40px", overflow: "hidden" }}>
          {product.description}
        </p>
        <p className="fw-bold text-warning fs-5 mb-0">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
