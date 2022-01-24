const userAPI = require("./user");

module.exports = (app) => {
  app.get("/", (req, res) => res.send("hello world"));
  app.use("/api/user", userAPI);
};
