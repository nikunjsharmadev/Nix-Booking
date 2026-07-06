import "./SearchBar.css";
function SearchBar() {
  return (
    <form className="search-box" onSubmit={(e) => e.preventDefault()}>
      <input type="text" name="destination" placeholder="Destination" />
      <input type="date" name="from" />
      <input type="date" name="to" />
      <select name="type">
        <option>1 Guest</option>
        <option>2 Guest</option>
        <option>Family</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}
export default SearchBar;
