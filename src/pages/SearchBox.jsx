import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/items?search=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="d-flex justify-content-center mt-4 px-3">
      <div className="input-group w-100 w-md-75 shadow-sm">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control border-warning form-control-lg"
        />
        <button
          type="submit"
          className="btn btn-warning text-white fw-semibold px-4"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
