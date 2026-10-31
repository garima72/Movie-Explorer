import { useState } from 'react';
import './explorer.css';
import MovieCard from './card';
import SearchBar from './search';
const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    genre: "Adventure",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: 4,
    title: "Avatar",
    year: 2009,
    genre: "Fantasy",
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
  }
];

function Explorer() {
    const [search, setSearch] = useState("");
    const [favourites, setFavourites] = useState([]);
    const toggleFavourite = (movieId) => {
  if (favourites.includes(movieId)) {
    setFavourites(
      favourites.filter((id) => id !== movieId)
    );
  } else {
    setFavourites([...favourites, movieId]);
  }
};
const favouriteMovies = movies.filter((movie) =>
  favourites.includes(movie.id)
);
    const filteredMovies = movies.filter((movie) =>
  movie.title.toLowerCase().includes(search.toLowerCase())
);
const moviesToDisplay = search.trim() === ""
  ? movies
  : filteredMovies;
return (
  <div className="explorer">
    <h1>Movie Explorer</h1>
    <p>Discover movies worth watching.</p>

    <SearchBar search={search} setSearch={setSearch} />

    {search.trim() === "" && (
      <p>Explore all movies!</p>
    )}

    {search.trim() !== "" && filteredMovies.length === 0 ? (
      <p>No movies found. Try another search.</p>
    ) : (
      <div className="movie-list">
        {moviesToDisplay.map((movie) => (
         <MovieCard
  key={movie.id}
  movie={movie}
  isFavourite={favourites.includes(movie.id)}
  onToggleFavourite={toggleFavourite}
/>
        ))}
        <div className="favourites-section">
  <h2>Favourite Movies</h2>

  {favouriteMovies.length === 0 ? (
    <p>No favourite movies added yet.</p>
  ) : (
    <div className="movie-list">
      {favouriteMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavourite={true}
          onToggleFavourite={toggleFavourite}
        />
      ))}
    </div>
  )}
</div>
      </div>
    )}
  </div>
);
}

export default Explorer;
