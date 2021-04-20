"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { cloudinary } = require("./utils/cloudinary");
require("dotenv").config();

const { signUp, logIn } = require("./handlers/userHandler");
const {
  getBarcelona,
  getMontreal,
  getTokyo,
  getToronto,
  postBarcelona,
  postMontreal,
  postTokyo,
  postToronto,
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
  //.use(bodyParser.json())
  .use("/", express.static(__dirname + "/"))
  //.use(express.urlencoded({ extended: false }))

  //allows data from forms
  .use(express.urlencoded({ extended: true, limit: "50mb" }))
  .use(express.json({ limit: "50mb" }))

  // endpoint for testing
  .get("/bacon", (req, res) => res.status(200).json("🥓"))

  // endpoint for montreal images (cloudinary)
  // .get("/montreal", async (req, res) => {
  //   const { resources } = await cloudinary.search
  //     .expression("folder:montreal")
  //     .sort_by("public_id", "desc")
  //     .max_results(15)
  //     .execute();

  //   const publicIds = resources.map((file) => file.public_id);
  //   res.send(publicIds);
  // })

  // endpoint for user sign-up
  .post("/signup", signUp)
  .post("/login", logIn)

  // endpoints to get images by city
  .get("/barcelona", getBarcelona)
  .get("/montreal", getMontreal)
  .get("/tokyo", getTokyo)
  .get("/toronto", getToronto)

  // endpoints to post images by city
  .post("/barcelona", postBarcelona)
  .post("/montreal", postMontreal)
  .post("/tokyo", postTokyo)
  .post("/toronto", postToronto)

  // .post("/upload", async (req, res) => {
  //   try {
  //     const imageString = req.body.data;
  //     //console.log("img-str", imageString);

  //     const uploadResponse = await cloudinary.uploader.upload(imageString, {
  //       upload_preset: "upload_images",
  //       tags: "toronto",
  //     });
  //     console.log("upload response", uploadResponse);
  //     res.json({ message: "Successfully uploaded" });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json({ err: "Something went wrong" });
  //   }
  // })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
