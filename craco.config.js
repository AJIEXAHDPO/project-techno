const path = require("path");

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components/"),
      '@images': path.resolve(__dirname, "src/img/"),
      '@functions': path.resolve(__dirname, "src/functions.js"),
      '@data': path.resolve(__dirname, "src/data/"),
    }
  }
}
