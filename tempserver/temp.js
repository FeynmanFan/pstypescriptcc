const http = require("http");

const host = 'localhost';
const PORT = 2112;

const DECIMAL_PLACES = 2;
const MIN_TEMP = -15;
const MAX_TEMP = 2;

const clients = [];

function getRandom(min, max){
  const multiplier = Math.pow(10, DECIMAL_PLACES);

  // Generate a random number, shift decimal places, round to the nearest integer, and shift back
  const randomShifted = Math.floor(Math.random() * (max - min + 1) * multiplier) + min * multiplier;
  
  return randomShifted / multiplier;
}

function formatPacket(value, id){
	return JSON.stringify({ "value": value, "sensorId": id});
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/JSON' });

  const randomValue = getRandom(MIN_TEMP, MAX_TEMP);

  // Send the random value as the response
  res.end(formatPacket(randomValue, 12345));
});

setInterval(() => {
  // Generate a new random value
  const randomValue = getRandom(MIN_TEMP, MAX_TEMP);

  // Broadcast the random value to all connected clients
  clients.forEach((client) => {
    client.write(formatPacket(randomValue, 12345));
  });
}, 1000);


server.on('connection', (socket) => {
  // Add the new client to the array
  clients.push(socket);

  // Remove the client from the array when it disconnects
  socket.on('close', () => {
    const index = clients.indexOf(socket);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});