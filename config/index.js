const proxy = require("./proxy");

const config = {
  proxy: proxy.dev,
  dev: {
    host: "localhost",
    port: "8000",
  },
};

module.exports = config;
