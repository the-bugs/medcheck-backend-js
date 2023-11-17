const bodyParser = require("body-parser");

const especialidadesRoute = require("./especialidades");
const adminRoute = require("./administradores");
const usuarioRoute = require("./usuarios");
const pacienteRoute = require("./pacientes");
const medicoRoute = require("./medicos");
const prontuarioRoute = require("./prontuarios");
const auth = require('./auth');

module.exports = (app) => {
  app.use(bodyParser.json(), usuarioRoute, especialidadesRoute, adminRoute, pacienteRoute, medicoRoute, prontuarioRoute, auth);

  app.get("/", (req, res) => {
    res.status(200).send({ message: "API Medcheck funcionando normalmente" });
  });
};
