import Search from "./components/search";
import Filter from "./components/filter";

function Filters({ countries, setCountriesDisplayed }) {
  return (
    <div className="flex justify-between items-center">
      <Search
        countries={countries}
        setCountriesDisplayed={setCountriesDisplayed}
      />
      <Filter
        countries={countries}
        setCountriesDisplayed={setCountriesDisplayed}
      />
    </div>
  );
}

export default Filters;
