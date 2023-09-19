const bodyParser = require("body-parser");
const usuariosRoute = require("./usuarios");

module.exports = (app) => {
  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    res.status(200).send({ message: "API Medcheck funcionando normalmente" });
  });

  app.use(usuariosRoute);
};
