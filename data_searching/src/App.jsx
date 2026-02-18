// FILE: src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const API_KEY = "a2d86755e5d6eac04182233d4c6dcb1e";
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=1`;

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
.00
  // 🟢 Load movies
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const withPrice = (data.results || []).map((m) => ({
          ...m, price: Math.floor(Math.random() * 900) + 100, // 100–1000
        }));
        setMovies(withPrice);
      });
  }, []);

  // 🟢 Apply filters (simplest way)
  const filteredMovies = movies
    .filter((m) =>
      m.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((m) => m.price <= maxPrice)
    .sort((a, b) => {
      if (sort === "rating") return b.vote_average - a.vote_average;
      if (sort === "release")
        return new Date(b.release_date) - new Date(a.release_date);
      return 0;
    });

  return (
    <div className="app">
      <header className="header">
        <h1>🎬 Trending Movies</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search movie..." value={search} onChange={(e) => setSearch(e.target.value)} />

          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort By</option>
            <option value="rating">Rating</option>
            <option value="release">Release Date</option>
          </select>

          <div className="price-filter">
            <label>
              Max Price: <b>₹{maxPrice}</b>
              <input type="range" min="100" max="1000" step="50" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
            </label>
          </div>
        </div>
      </header>

      <main>
        {
          filteredMovies.length === 0 ? (
            <p className="no-results">No movies found.</p>
          ) : (
            <section className="movies-grid">
              {
                filteredMovies.map((movie) => (
                  <article className="movie-card" key={movie.id}>
                    <div className="poster-wrap">
                      {
                        movie.poster_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                          />
                        ) : (
                          <div className="no-poster">No Image</div>
                        )
                      }
                    </div>
                    <div className="movie-info">
                      <h3 className="title">{movie.title}</h3>
                      <p className="meta">
                        ⭐ {movie.vote_average} • {movie.release_date}
                      </p>
                      <p className="price">💰 Price: ₹{movie.price}</p>
                    </div>
                  </article>
                ))
              }
            </section>
          )
        }
      </main>

      <footer className="footer">Data from TMDB</footer>
    </div>
  );
};

export default App;
