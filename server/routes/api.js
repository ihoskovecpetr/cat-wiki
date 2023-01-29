var express = require("express");
var router = express.Router();
const axios = require("axios");
const axiosInstance = require("../lib/axiosInstance");

router.get("/init_data", async function (req, response, next) {
  try {
    const breeds_promise = axiosInstance().get(
      "https://api.thecatapi.com/v1/breeds"
    );

    const images_promise = axiosInstance().get(
      "https://api.thecatapi.com/v1/images/search?limit=15"
    );

    const [breeds_data, images_data] = await Promise.all([
      breeds_promise,
      images_promise,
    ]);

    const filteredBreeds = breeds_data.data.map((cat) => ({
      id: cat.id,
      name: cat.name,
    }));

    response.json({ images: images_data.data, breeds: filteredBreeds });
  } catch (error) {
    console.log("Error: ", error.message);
  }
});

router.get("/breed_data", async function (req, response, next) {
  try {
    const breed_data = await axiosInstance().get(
      `https://api.thecatapi.com/v1/images/search?breed_id=${req.query.breed_id}`
    );

    response.json({ breed: breed_data.data[0] });
  } catch (error) {
    console.log("Error: ", error.message);
  }
});

module.exports = router;
