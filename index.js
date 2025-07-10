const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Servir arquivos estáticos da pasta "public"
app.use(express.static("public"));

// Exemplo simples de WebSocket
wss.on("connection", (ws) => {
  console.log("Novo cliente conectado");
  ws.send("Conexão WebSocket estabelecida!");

  ws.on("message", (message) => {
    console.log("Mensagem recebida:", message.toString());
    ws.send("Você disse: " + message.toString());
  });
});

// Substitua 3000 por process.env.PORT para funcionar no Render
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
