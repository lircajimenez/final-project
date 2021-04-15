"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { cloudinary } = require("./utils/cloudinary");
require("dotenv").config();

const {
  getBarcelona,
  getTokyo,
  getToronto,
} = require("./handlers/cityHandlers");

const PORT = 4000;

// general setup
express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // endpoint for testing
  .get("/bacon", (req, res) => res.status(200).json("🥓"))

  // endpoint for montreal images (cloudinary)
  .get("/montreal", async (req, res) => {
    const { resources } = await cloudinary.search
      .expression("folder:montreal")
      .sort_by("public_id", "desc")
      .max_results(10)
      .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
  })

  // endpoints for cities
  .get("/barcelona", getBarcelona)
  .get("/tokyo", getTokyo)
  .get("/toronto", getToronto)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
