import * as WebSocket from 'ws' 
const dp = require('../shared/dataPacket');

const PORT = 2112;

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', (ws) => {
    console.log('Client connected');

  const intervalId = setInterval(() => {
      ws.send(dp.dataPacket.simulatePacket().toString());
  }, 1000);

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(intervalId); 
  });
});