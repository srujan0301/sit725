const socket = io();

socket.on("number", (data) => {
  console.log("📥 Received number:", data);
  document.getElementById("number").innerText = data;
});
