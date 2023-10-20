const bodyParser = require("body-parser");

const especialidadesRoute = require("./especialidades");
const adminRoute = require("./administradores");

module.exports = (app) => {
  app.use(bodyParser.json(), especialidadesRoute, adminRoute);

  app.get("/", (req, res) => {
    res.status(200).send({ message: "API Medcheck funcionando normalmente" });
  });
};
