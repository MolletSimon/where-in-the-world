function Detail({ countryDetail, setDetail }) {
  const onClickBack = () => {
    setDetail(false);
  };

  return (
    <div>
      <button
        onClick={onClickBack}
        className="p-4 pl-6 pr-6 rounded-md shadow-md m-10 font-Nunito font-semibold 
        flex items-center w-40 justify-center"
      >
        <span class="material-symbols-outlined">arrow_back_ios</span>
        Back
      </button>
      <div className="grid grid-cols-2 mt-20">
        <div className="ml-32">
          <img src={countryDetail.flags.png} className="w-3/4" />
        </div>
        <div>
          <h1 className="text-start text-4xl font-Nunito font-extrabold mt-20">
            {countryDetail.name.common}
          </h1>
          <div className="grid grid-cols-2 mt-10">
            <div>
              <h3 className="font-Nunito">
                <span className="font-semibold">Native Name: </span>
                {countryDetail.name.official}
              </h3>
              <h3 className="font-Nunito">
                <span className="font-semibold">Population: </span>
                {countryDetail.population}
              </h3>
              <h3 className="font-Nunito">
                <span className="font-semibold">Region: </span>
                {countryDetail.region}
              </h3>
              <h3 className="font-Nunito">
                <span className="font-semibold">Sub Region: </span>
                {countryDetail.subregion}
              </h3>
              <h3 className="font-Nunito">
                <span className="font-semibold">Capital: </span>
                {countryDetail.capital[0]}
              </h3>
            </div>
            <div>
              <h3 className="font-Nunito">
                <span className="font-semibold">Top Level Domain: </span>
                {countryDetail.tld[0]}
              </h3>
              <h3 className="font-Nunito">
                <span className="font-semibold">Currencies: </span>
                {
                  countryDetail.currencies[
                    Object.keys(countryDetail.currencies)[0]
                  ].name
                }
              </h3>
              <h3 className="font-Nunito">
                <span className="font-semibold">Languages: </span>
                {
                  countryDetail.languages[
                    Object.keys(countryDetail.languages)[0]
                  ]
                }
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
