function Card({ country }) {
  return (
    <div className="shadow-md rounded-md w-4/5">
      <img
        src={country.flags.png}
        className=" max-h-40 h-40 object-cover rounded-md"
        width="300"
        height="100"
      />

      <div className="ml-5 mt-4 mb-14">
        <h2 className="font-Nunito text-xl font-extrabold mb-4 mt-8">
          {country.name.common}
        </h2>
        <p className="font-Nunito mb-1">
          <span className="font-semibold">Population: </span>
          {country.population}
        </p>
        <p className="font-Nunito mb-1">
          <span className="font-semibold">Region: </span>
          {country.region}
        </p>
        <p className="font-Nunito">
          <span className="font-semibold">Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
