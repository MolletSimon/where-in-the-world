import Card from "./card";

function CardsView({ countriesDisplayed, setDetail, setCountryDetail }) {
  return (
    <div className="grid grid-cols-4 gap-6 items-center m-6">
      {countriesDisplayed &&
        countriesDisplayed.map((country, index) => (
          <Card
            setCountryDetail={setCountryDetail}
            setDetail={setDetail}
            key={index}
            country={country}
          />
        ))}
    </div>
  );
}

export default CardsView;
