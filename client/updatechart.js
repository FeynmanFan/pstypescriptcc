import { ChartObserver } from "./ChartObserver.js"
import { ConsoleObserver } from "./ConsoleObserver.js"
import { TableObserver } from "./TableObserver.js"
import { Dispatcher } from "./Dispatcher.js"
import { dataPacket } from "../shared/dataPacket.js"

document.addEventListener('DOMContentLoaded', () => {
	const socket = new WebSocket('ws://localhost:2112');

	let co = new ChartObserver("#chart");
	let cono = new ConsoleObserver();
	let tabo = new TableObserver("#dataTable");

	let disp = new Dispatcher();

	disp.register(co);
	disp.register(cono);
	disp.register(tabo);

	socket.addEventListener('open', (event) => {
		console.log('Connected:', event);
	});

	socket.addEventListener('close', (event) => {
		console.log('Disconnected:', event);
	});

	socket.addEventListener('error', (event) => {
		console.error('Error: ', event);
	});

	socket.addEventListener('message', (event) => {
		if (document.querySelector("#pauseButton").checked){
			return;
		}

		let jsonData = JSON.parse(event.data);
	
		const packet = new dataPacket(jsonData.sensorId, parseFloat(jsonData.time), parseFloat(jsonData.value));

		disp.pushData(packet);
		disp.notify();
	});
});