import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Filters from "./components/Filters/filters";
import Card from "./components/card";
import CardsView from "./components/cardsView";

function App() {
  const [darkMode, setDarkmode] = useState(false);
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
    <div className="bg-lightBackground">
      <Header darkMode={darkMode} setDarkmode={setDarkmode} />
      <Filters
        countries={countries}
        setCountriesDisplayed={setCountriesdisplayed}
      />
      {countriesDisplayed && (
        <CardsView countriesDisplayed={countriesDisplayed} />
      )}
    </div>
  );
}

export default App;
