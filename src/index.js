const Application = require("./server/service");

const start = async () => {
  const app = new Application();
  await app.init();
};

start()
