const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const binance = require("node-binance-api");
binance.options({
 APIKEY: "aChsKUyFERREzQtCvUKefYISnSXyBkKsF5aCauexgJv6v5flsRCA2PD1IIVOmJq7",
 APISECRET: "yx1JzJqZizm8pwv0lt6YJeULEZxBMgwHWGglsT0bk4P6QONUg1azWzi5Gm0FwZ5E"
});
const mongoose = require("mongoose");

var promise = mongoose.connect("mongodb://localhost/binance", {
 useMongoClient: true
 /* other options */
});

const btcSchema = new mongoose.Schema({
 pair: String,
 avgVolume: Number,
 curVolume: Number,
 volumeDiff: Number,
 percDiff: Number
});

var btcModel = mongoose.model("btcModel", btcSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
 binance.prices(function(ticker) {
  res.render("binance", { ticker: ticker });
 });
});
app.get("/getticks", (req, res) => {
 var dataArr = [];
 binance.prices(function(ticker) {
  for (var key in ticker) {
   if (ticker.hasOwnProperty(key) && key[5] != 6) {
    binance.candlesticks(key, "1w", function(ticks, symbol) {
     const period = "1w";
     var volumeSum = 0;
     var last11 = ticks.slice(-11);
     last11.pop();
     last11.forEach(currentTick => {
      let [
       time,
       open,
       high,
       low,
       close,
       volume,
       closeTime,
       assetVolume,
       trades,
       buyBaseVolume,
       buyAssetVolume,
       ignored
      ] = currentTick;
      volumeSum += Number.parseFloat(volume);
     });
     var volumeAvg = (Number.parseFloat(volumeSum) / 10).toFixed(2);
     let [, , , , , volumeLast, , , , , ,] = ticks[ticks.length - 1];
     var volumeDiff = Number.parseFloat(volumeLast) - volumeAvg;
     var percentDiff = volumeDiff / volumeAvg * 100;
     percentDiff = percentDiff.toFixed(2);
     const newBtc = {
      pair: symbol,
      avgVolume: volumeAvg,
      curVolume: Number.parseFloat(volumeLast),
      volumeDiff: volumeDiff,
      percDiff: percentDiff
     };
     btcModel.create(
      newBtc,
      (err, btc) => (err ? console.log("There was an error!1") : null)
     );
    });
   }
  }
 });
 setTimeout(() => {
  btcModel.find(
   {},
   (err, btc) =>
    err
     ? console.log("There was an error!2")
     : res.render("ticks", { btcIndexes: btc })
  );
 }, 2000);
});

app.listen(3000, () => console.log("Server started!"));
