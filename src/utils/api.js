const request = require('request');
const FIXER_API_KEY = process.env.FIXER_API_KEY;

const getCountry = (address) => {
  const url = "https://restcountries.eu/rest/v2/name/" + encodeURIComponent(address) + "?fields=name;population;currencies"

  return new Promise((resolve, reject) => {
    request({ url, json: true }, (error, {body}) => {
      if (error) {
        reject(error)
      } else {
        resolve(body)
      }
    });
  })
};

const getCurrencyConversion = (currency) => {
  const url =
    "http://data.fixer.io/api/latest?access_key=" + FIXER_API_KEY + "&base=" + currency + "&symbols=SEK";
  return new Promise((resolve, reject) => {
    request({ url, json: true }, (error, { body }) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};


module.exports = { getCountry, getCurrencyConversion };