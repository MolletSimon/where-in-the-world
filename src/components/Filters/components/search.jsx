function Search({ setCountriesDisplayed, countries }) {
  const search = (event) => {
    setCountriesDisplayed(
      countries.filter((c) =>
        c.name.common.toLowerCase().startsWith(event.target.value.toLowerCase())
      )
    );
  };
  return (
    <div className="m-10">
      <input
        type="text"
        className="p-5 w-[600px] ml-20 bg-white drop-shadow-lg 
        font-Nunito rounded-lg text-ligthInput font-semibold"
        placeholder="🔍    Search for a country..."
        onChange={(event) => search(event)}
      />
    </div>
  );
}

export default Search;
