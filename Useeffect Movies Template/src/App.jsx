import React, { useEffect, useState } from "react";

function TrendingMovies() {
  let [movies, setMovies] = useState([]);
  let [page, setPage] = useState(1); // ✅ page 100 ki jagah 1 se start
  let [hasMore, setHasMore] = useState(true);

  // API call function
  let fetchMovies = async (pageNum) => {
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=${pageNum}`
      );
      let data = await res.json();

      if (data.results && data.results.length > 0) {
        setMovies((prev) => [...prev, ...data.results]); // purane + naye
      } else {
        setHasMore(false); // aur movies nahi h
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  // Initial load
  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  // View More Button click
  let handleViewMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex justify-center items-start p-6">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-10 tracking-wide">
          🎬 Trending Movies
        </h1>

        {/* Movie Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Poster */}
              <div className="h-64 overflow-hidden">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://via.placeholder.com/500x750?text=No+Image"
                  }
                  alt={movie.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col flex-1 p-4">
                <h2 className="text-base font-semibold text-white mb-2 truncate">
                  {movie.title}
                </h2>
                <p className="text-xs text-gray-400 line-clamp-3 flex-1">
                  {movie.overview || "No description available."}
                </p>
                <div className="flex justify-between items-center mt-3 text-sm">
                  <span className="text-yellow-400 font-medium">
                    ⭐ {movie.vote_average}/10
                  </span>
                  <span className="text-gray-500 italic">
                    {movie.release_date?.slice(0, 4) || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleViewMore}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-md hover:shadow-xl transition"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrendingMovies;