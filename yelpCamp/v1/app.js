const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const campgrounds = [
  {
    name: "Salmon Greek",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wOVj8gzLcRLvI_3VA2tWHnL5duElVtRLrX6jkEervyLtWNkm",
  },
  {
    name: "Redert Greek",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPkl6-QTpNwNUzYKWgb3GqYUeQWyG8BgQPPYkGL8MFwnodqaM",
  },
  {
    name: "Oputed Greek",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HhPUKIxeXlU1hNbTjccGfqyqEowdJT9bktFxvBqs5nd7lFMU_w",
  },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("landing"));

app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/campgrounds/new", (req, res) => res.render("new.ejs"));
app.post("/campgrounds", (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.listen(3000, () => console.log("Server started!"));
