import { useEffect, useState } from "react";
import Filters from "../components/Filters/filters";
import CardsView from "../components/cardsView";

function Home({ setDetail, setCountryDetail }) {
  const [countries, setCountries] = useState([]);
  const [countriesDisplayed, setCountriesdisplayed] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((json) => {
        const countriesSorted = json.sort((a, b) =>
          a.name.common > b.name.common
            ? 1
            : b.name.common > a.name.common
            ? -1
            : 0
        );
        console.log(countriesSorted);
        setCountries(countriesSorted);
        setCountriesdisplayed(countriesSorted);
      });
  }, []);

  return (
    <>
      <Filters
        countries={countries}
        setCountriesDisplayed={setCountriesdisplayed}
      />
      {countriesDisplayed && (
        <CardsView
          setCountryDetail={setCountryDetail}
          setDetail={setDetail}
          countriesDisplayed={countriesDisplayed}
        />
      )}
    </>
  );
}

export default Home;
