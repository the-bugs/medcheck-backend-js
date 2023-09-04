const express = require("express");
const app = express();
const port = 3000;

// Middleware para processar solicitações JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Medcheck funcionando normalmente" });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
