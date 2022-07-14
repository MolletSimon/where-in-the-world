function Detail({ countryDetail, setDetail }) {
  const onClickBack = () => {
    setDetail(false);
  };

  return (
    <div>
      <button
        onClick={onClickBack}
        className="p-4 pl-6 pr-6 rounded-md shadow-md m-10 font-Nunito font-semibold 
        flex items-center w-40 justify-center dark:bg-darkInput dark:text-white"
      >
        <span className="material-symbols-outlined">arrow_back_ios</span>
        Back
      </button>
      <div className="grid md:grid-cols-2 mt-20">
        <div className="md:ml-32 flex justify-center md:justify-start">
          <img src={countryDetail.flags.png} className="w-1/2 md:w-3/4" />
        </div>
        <div>
          <h1
            className="text-start text-4xl font-Nunito font-extrabold 
          mt-20 dark:text-darkText md:ml-0 ml-7"
          >
            {countryDetail.name.common}
          </h1>
          <div
            className="grid md:grid-cols-2 mt-10 dark:text-white 
          ml-7 md:ml-0 leading-8 md:leading-0"
          >
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
