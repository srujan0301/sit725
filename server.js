const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log("✅ A user connected");

  // Emit a unique number to each user
  const uniqueNumber = Math.floor(Math.random() * 100);
  socket.emit("number", uniqueNumber);

  socket.on("disconnect", () => {
    console.log("❌ A user disconnected");
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
