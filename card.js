
function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.movie.poster} alt={props.movie.title} />

      <div className="movie-info">
        <h2>{props.movie.title}</h2>
        <p>{props.movie.year} | {props.movie.genre}</p>
        <p>⭐ {props.movie.rating}</p>
        <button onClick={() => props.onToggleFavourite(props.movie.id)}>
  {props.isFavourite ? "Remove from Favourites" : "Add to Favourites"}
</button>
      </div>
    </div>
  );
}

export default MovieCard;