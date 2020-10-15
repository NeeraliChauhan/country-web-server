const express = require('express');
const cors = require('cors');
const { getCurrency, getCountries } = require("./utils/getCountries");

const app = express();
const port = process.env.PORT

app.use(cors())

app.get("/countries", (req, res) => {
  if (!req.query.keyword) {
    return res.send({
      error: "Please provide a keyword!",
    });
  }
  getCountriesList(req.query.keyword).then((response) => {
    if (response) {
      res.status(200).send({
        result: response,
      });
    } else {
      res.status(500).send({
        result: []
      });
    }
  });
})

app.get("/country/currencies", (req, res) => {
  if (!req.query.code) {
    return res.send({
      error: "Please provide a keyword!",
    });
  }
  getCurrency(req.query.code).then((response) => {
    if (response) {
      res.status(200).send({
        result: response
      });
    } else {
      res.status(200).send({
        result: null
      });
    }
  });
});

app.listen(port, ()=> {
  console.log(`Server is up on ${port}`)
})

const getCountriesList = async (keyword) => {
  try {
    let response = await getCountries(keyword)
    return response;
  } catch(err){
    console.log(err);
    return null
  }
}