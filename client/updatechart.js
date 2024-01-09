import { ChartObserver } from "./ChartObserver.js"
import { Dispatcher } from "./Dispatcher.js"
import { dataPacket } from "../shared/dataPacket.js"

idocument.addEventListener('DOMContentLoaded', () => {
	const socket = new WebSocket('ws://localhost:2112');

	let co = new ChartObserver("#chart");

	let disp = new Dispatcher();
	disp.register(co);

	socket.addEventListener('open', (event) => {
		console.log('Connected:', event);
	});

	socket.addEventListener('close', (event) => {
		console.log('Disconnected:', event);
	});

	socket.addEventListener('error', (event) => {
		console.error('Error: ', event);
	});
  
	const data = [];
	
	socket.addEventListener('message', (event) => {
		if (document.querySelector("#pauseButton").checked){
			return;
		}
		
		console.log("Received packet");
		console.dir(event.data);

		const jsonData = JSON.parse(event.data);
		data.push(jsonData);

		if (data.length > 10) {
		  data.shift();
		}

		const packet = new dataPacket(event.data.sensorId, parseInt(event.data.time), parseInt(event.data.value));

		disp.notify(packet)

		updateTable(data);
	});
  
	function updateTable(data){
		if (data.length >= 9){
			document.querySelector("#dataTable tbody").innerHTML = "";
		  
			lastTen = data.slice(-9);
		  
			var dataHTML = "";
		  
			for(var i = 0; i < 9; i++){
				dataHTML += "<tr>";
				dataHTML += "<td>" + i + "</td>";
				dataHTML += "<td>" + data[i].value + "</td>";
				dataHTML += "<td>" + data[i].sensorId + "</td>";
				dataHTML += "<td>" + data[i].time + "</td></tr>";
			}
		  
			document.querySelector("#dataTable tbody").innerHTML = dataHTML;
		}
	}
});