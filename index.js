const express = require("express");
const app = express();
const PORT = 3001;

const fs = require("fs");

app.use(express.urlencoded({ extended: true }));

app.get("/index.html", (req, res) => {
  console.log("Hallo aus der Get Funktion");
  res.sendFile(__dirname + "/index.html");
});

app.get("/roster.html", (req, res) => {
  console.log("Hallo aus der Get Funktion");
  res.sendFile(__dirname + "/roster.html");
});

app.get("/videos.html", (req, res) => {
  console.log("Hallo aus der Get Funktion");
  res.sendFile(__dirname + "/videos.html");
});

app.get("/fanart.html", (req, res) => {
  console.log("Hallo aus der Get Funktion");
  res.sendFile(__dirname + "/fanart.html");
});

app.get("/contact.html", (req, res) => {
  console.log("Hallo aus der Get Funktion");
  res.sendFile(__dirname + "/contact.html");
});

app.listen(PORT, () => {
  console.log(`Der Server wurde gestartet auf Port: ${PORT}`);
});
