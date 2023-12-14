document.addEventListener('DOMContentLoaded', () => {
	const socket = new WebSocket('ws://localhost:2112');
	
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

		updateChart();
		updateTable(data);
	});

	const width = 1024;
	const height = 768;

	const svg = d3.select('#chart')
		.attr('width', width)
		.attr('height', height);

	const g = svg.append('g')
		.attr('transform', 'translate(50, 50)');

	const xScale = d3.scaleLinear().range([0, width - 100]);
	const yScale = d3.scaleLinear().range([height - 100, 0]);

	const xAxis = d3.axisBottom().scale(xScale);
	const yAxis = d3.axisLeft().scale(yScale);

	svg.append('g')
		.attr('class', 'x-axis')
		.attr('transform', `translate(50, ${height - 50})`);

	svg.append('g')
		.attr('class', 'y-axis')
		.attr('transform', 'translate(50, 50)');

	function updateChart() {
		console.info("Updating chart");
	  
		xScale.domain([0, data.length - 1]);
		yScale.domain([d3.min(data, d => d.value), d3.max(data, d => d.value)]);

		svg.select('.x-axis').call(xAxis);
		svg.select('.y-axis').call(yAxis);

		const line = d3.line()
			.x((d, i) => xScale(i))
			.y(d => yScale(d.value));

		g.select('.line').remove(); 
		g.append('path')
			.datum(data)
			.attr('class', 'line')
			.attr('d', line);
	}
  
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