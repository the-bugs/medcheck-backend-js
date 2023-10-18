const bodyParser = require("body-parser");
const usuariosRoute = require("./usuarios");
const especialidadesRoute = require("./especialidades");

module.exports = (app) => {
  app.use(bodyParser.json(), usuariosRoute, especialidadesRoute);

  app.get("/", (req, res) => {
    res.status(200).send({ message: "API Medcheck funcionando normalmente" });
  });
};
