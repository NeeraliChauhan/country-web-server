const { getCountry, getCurrencyConversion } = require("./api");

const getCountries = async ( keyword ) => {
  const countries = await getCountry(keyword);
  return countries
}

const getCurrency = async (currency_code) => {
  const exch_currency = await getCurrencyConversion(currency_code);
  return exch_currency.success ? exch_currency.rates : null;
}


module.exports = {getCountries, getCurrency};
