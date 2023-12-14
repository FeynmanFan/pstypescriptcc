document.addEventListener('DOMContentLoaded', () => {
  const outputDiv = document.getElementById('output');

  // Create a WebSocket connection
  const socket = new WebSocket('ws://localhost:2112');

  // Event handler for when the connection is opened
  socket.addEventListener('open', (event) => {
    console.log('Connected:', event);
  });

  // Event handler for when a message is received from the server
  socket.addEventListener('message', (event) => {
    // Parse the received JSON message
    const data = JSON.parse(event.data);
	
	console.dir(data);

    // Update the webpage with the received values
    outputDiv.innerHTML = `ID: ${data.sensorId}, Value: ${data.value}`;
  });

  // Event handler for when the connection is closed
  socket.addEventListener('close', (event) => {
    console.log('Disconnected:', event);
  });

  // Event handler for errors
  socket.addEventListener('error', (event) => {
    console.error('Error: ', event);
  });
});
