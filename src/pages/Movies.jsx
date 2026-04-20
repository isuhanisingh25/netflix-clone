import React from "react";

const Movies = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      genre: "Sci-Fi",
    },
    {
      id: 2,
      title: "The Dark Knight",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      genre: "Action",
    },
    {
      id: 3,
      title: "Interstellar",
      image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      genre: "Adventure",
    },
    {
      id: 5,
      title: "Joker",
      image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      genre: "Drama",
   } 
  ];

  return (
    <div style={{ padding: "20px", background: "black", minHeight: "100vh" }}>
      <h1 style={{ color: "white" }}>Movies</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ color: "white" }}>
            <img
              src={movie.image}
              alt={movie.title}
              style={{ width: "200px", borderRadius: "10px" }}
            />
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;