require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const app = express();
const port = process.env.APP_PORT;

routes(app);

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta http://localhost:${port}/`);
});

module.exports = app;
