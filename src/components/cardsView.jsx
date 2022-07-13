import Card from "./card";

function CardsView({ countriesDisplayed }) {
  return (
    <div className="grid grid-cols-4 gap-6 ml-32">
      {countriesDisplayed &&
        countriesDisplayed.map((country, index) => (
          <Card key={index} country={country} />
        ))}
    </div>
  );
}

export default CardsView;
