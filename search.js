
function SearchBar(props) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies..."
        value={props.search}
        onChange={(event) => props.setSearch(event.target.value)}
      />

      <button onClick={() => props.setSearch("")}>
        Reset
      </button>
    </div>
  );
}

export default SearchBar;
