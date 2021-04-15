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

module.exports = { getBarcelona, getTokyo, getToronto };
