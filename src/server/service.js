const Express = require("express");

const { PORT } = require("../config");
const { VideoRoute } = require("../routes");

class Application {
  constructor() {
    this.app = Express();
  }
  async init() {
    this.app.use(VideoRoute);

    this.app.listen(PORT, () => console.log(`Its working on port ${PORT}`));
  }
}

module.exports = Application;
