const { getCountry, getCurrencyConversion } = require("./api");

const getCountries = async ( keyword ) => {
  const countries = await getCountry(keyword);
  const formatted_countries = [];
  if(countries && countries.length){
    for( let country of countries) {
      const currencies = country.currencies[0];
      const exch_currency = await getCurrencyConversion(currencies.code)
      formatted_countries.push({
        name: country.name,
        population: country.population,
        currency: currencies,
        exchange_currency: exch_currency.success ? exch_currency.rates : null
      })
    }
  }
  return formatted_countries
}


module.exports = getCountries;
