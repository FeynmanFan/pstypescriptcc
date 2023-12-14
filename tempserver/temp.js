const WebSocket = require('ws');
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
	return JSON.stringify({ "value": value, "time": new Date().toISOString(), "sensorId": id});
}

function getPacket(){
	const randomValue = getRandom(MIN_TEMP, MAX_TEMP);
	return formatPacket(randomValue, 12345);
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/JSON' });
  res.end(getPacket());
});

const wss = new WebSocket.Server({server});

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Simulate sending a JSON message every second
  const intervalId = setInterval(() => {
	const value = getRandom(MIN_TEMP, MAX_TEMP);
    
    // Send a JSON message to the connected client
    ws.send(getPacket());
  }, 1000);

  // Event handler for when a client closes the connection
  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(intervalId); // Stop the interval when the client disconnects
  });
});

server.listen(PORT, () => {
  console.log(`WebSocket server listening on port ${PORT}`);
});