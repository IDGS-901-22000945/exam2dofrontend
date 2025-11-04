import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/items?search=${query}`);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light px-3">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4" style={{ color: "#9b5de5" }}>
          Bazar Jaqueline
        </h1>
        <p className="text-secondary fs-5">
          Encuentra tus productos favoritos al mejor precio
        </p>
      </div>

      <form
        onSubmit={handleSearch}
        className="input-group w-100 w-md-75 w-lg-50 shadow-sm"
      >
        <input
          type="text"
          placeholder="Buscar productos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control form-control-lg border-0"
          style={{ borderTopLeftRadius: "30px", borderBottomLeftRadius: "30px" }}
        />
        <button
          type="submit"
          className="btn text-white fw-semibold px-4"
          style={{
            background: "linear-gradient(90deg, #9b5de5, #f15bb5)",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Buscar
        </button>
      </form>

      <p className="mt-4 fst-italic text-center" style={{ color: "#9b5de5" }}>
        Explora, elige y compra con un solo clic
      </p>
    </div>
  );
};

export default Home;
