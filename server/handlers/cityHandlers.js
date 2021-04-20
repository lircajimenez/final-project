const { cloudinary } = require("../utils/cloudinary");
require("dotenv").config();

const getBarcelona = async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:cities_images && tags:barcelona")
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
};

const getMontreal = async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:cities_images && tags:montreal")
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
};

const getTokyo = async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:cities_images && tags:tokyo")
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
};

const getToronto = async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:cities_images && tags:toronto")
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
};

const postBarcelona = async (req, res) => {
  try {
    const imageString = req.body.data;
    //console.log("img-str", imageString);

    const uploadResponse = await cloudinary.uploader.upload(imageString, {
      upload_preset: "upload_images",
      tags: "barcelona",
    });
    console.log("upload response", uploadResponse);
    res.status(201).json({
      status: 201,
      message: "Successfully uploaded",
      public_id: uploadResponse.public_id,
      url: uploadResponse.url,
    });
  } catch (err) {
    res.status(500).json({ status: 500, err: "Something went wrong" });
  }
};

const postMontreal = async (req, res) => {
  try {
    const imageString = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(imageString, {
      upload_preset: "upload_images",
      tags: "montreal",
    });
    console.log(uploadResponse);
    res.status(201).json({
      status: 201,
      message: "Successfully uploaded",
      public_id: uploadResponse.public_id,
      url: uploadResponse.url,
    });
  } catch (err) {
    res.status(500).json({ status: 500, err: "Something went wrong" });
  }
};

const postTokyo = async (req, res) => {
  try {
    const imageString = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(imageString, {
      upload_preset: "upload_images",
      tags: "tokyo",
    });
    console.log(uploadResponse);
    res.status(201).json({
      status: 201,
      message: "Successfully uploaded",
      public_id: uploadResponse.public_id,
      url: uploadResponse.url,
    });
  } catch (err) {
    res.status(500).json({ status: 500, err: "Something went wrong" });
  }
};

const postToronto = async (req, res) => {
  try {
    const imageString = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(imageString, {
      upload_preset: "upload_images",
      tags: "toronto",
    });
    res.status(201).json({
      status: 201,
      message: "Successfully uploaded",
      public_id: uploadResponse.public_id,
      url: uploadResponse.url,
    });
  } catch (err) {
    res.status(500).json({ status: 500, err: "Something went wrong" });
  }
};

module.exports = {
  getBarcelona,
  getMontreal,
  getTokyo,
  getToronto,
  postBarcelona,
  postMontreal,
  postTokyo,
  postToronto,
};
