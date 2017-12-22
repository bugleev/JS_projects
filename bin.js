const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const binance = require("node-binance-api");
binance.options({
  APIKEY: "aChsKUyFERREzQtCvUKefYISnSXyBkKsF5aCauexgJv6v5flsRCA2PD1IIVOmJq7",
  APISECRET: "yx1JzJqZizm8pwv0lt6YJeULEZxBMgwHWGglsT0bk4P6QONUg1azWzi5Gm0FwZ5E",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  binance.prices(function(ticker) {
    res.render("binance", { ticker: ticker });
  });
});
app.get("/ticks", (req, res) => {
  binance.prices(function(ticker) {
    res.render("ticks", { ticker: ticker, binance: binance });
  });
});

app.listen(3000, () => console.log("Server started!"));

