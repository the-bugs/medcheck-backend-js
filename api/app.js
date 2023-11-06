require("dotenv").config();
const express = require("express");
const cors = require('cors');
const routes = require("./routes");
const app = express();
const port = process.env.APP_PORT;

app.use(cors());

routes(app);


app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta http://localhost:${port}/`);
});


module.exports = app;
