// server.js
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const userId = req.query.id || "unknown";
  const visitorInfo = `${new Date().toISOString()} - User ID: ${userId}, IP: ${req.ip}\n`;

  // Simpan data kunjungan ke file log
  fs.appendFile("visitors.log", visitorInfo, (err) => {
    if (err) console.error("Gagal menyimpan data pengunjung:", err);
  });

  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
