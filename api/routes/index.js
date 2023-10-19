const bodyParser = require("body-parser");

const especialidadesRoute = require("./especialidades");

module.exports = (app) => {
  app.use(bodyParser.json(), especialidadesRoute);

  app.get("/", (req, res) => {
    res.status(200).send({ message: "API Medcheck funcionando normalmente" });
  });
};
