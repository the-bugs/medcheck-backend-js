require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { authenticate, connection } = require("./database/database");


const rotaUsuarios = require("./routes/usuarios");

const app = express();
const port = 3001;
app.use(cors());


// Middleware para processar solicitações JSON
app.use(express.json());

app.use(rotaUsuarios);


authenticate(connection);
connection.sync();

app.get("/", (req, res) => {
  res.json({ message: "API Medcheck funcionando normalmente" });
});



// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta http://localhost:${port}/`);
});
