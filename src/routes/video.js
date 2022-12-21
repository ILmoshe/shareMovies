const Express = require("express");
const Router = Express.Router();
const videos = require("../metadata/moviesList");

Router.get("/", async (req, res) => {
  res.send(videos);
});

module.exports = Router;
