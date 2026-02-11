import "./SearchForm.css";

function SearchForm({ value, onChange, onSubmit, isLoading }) {
  return (
    <form className="search" onSubmit={onSubmit} noValidate>
      <label className="search__label" htmlFor="searchQuery">
        GitHub username or organization
      </label>

      <div className="search__row">
        <input
          className="search__input"
          id="searchQuery"
          name="searchQuery"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="e.g. Domenique412"
          required
          autoComplete="off"
        />
        <button className="search__button" type="submit" disabled={isLoading}>
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
