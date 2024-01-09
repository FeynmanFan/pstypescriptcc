import { dataPacket } from "../shared/dataPacket"
import { Observer } from "./observer"
import * as d3 from "d3";

export class ChartObserver extends Observer {
	xScale: d3.ScaleLinear<number, number>;
	yScale: d3.ScaleLinear<number, number>;
	svg: any;
	g: any;
	xAxis: d3.Axis<d3.NumberValue>;
	yAxis: d3.Axis<d3.NumberValue>;
	allData: Array<dataPacket> = [];

	constructor(chartId: string) {
		super();

		const width = 1024;
		const height = 768;

		this.svg = d3.select(chartId)
			.attr('width', width)
			.attr('height', height);

		this.g = this.svg.append('g')
			.attr('transform', 'translate(50, 50)');

		this.xScale = d3.scaleLinear().range([0, width - 100]);
		this.yScale = d3.scaleLinear().range([height - 100, 0]);

		this.xAxis = d3.axisBottom(this.xScale).scale(this.xScale);
		this.yAxis = d3.axisLeft(this.yScale).scale(this.yScale);

		this.svg.append('g')
			.attr('class', 'x-axis')
			.attr('transform', `translate(50, ${height - 50})`);

		this.svg.append('g')
			.attr('class', 'y-axis')
			.attr('transform', 'translate(50, 50)');
	}

	receiveNotification(data: dataPacket) {
		this.svg = d3.select("body");

		this.updateChart(data);
	}

	updateChart(data: dataPacket) {
		console.info("Updating chart");

		this.xScale.domain([0, this.allData.length - 1]);

		this.yScale.domain([d3.min(this.allData, d => d.value as number) as number, d3.max(this.allData, d => d.value as number) as number]);

		this.svg.select('.x-axis').call(this.xAxis);
		this.svg.select('.y-axis').call(this.yAxis);

		const line = d3.line()
			.x((d) => this.xScale(d[0]))
			.y((d) => this.yScale(d[1]));

		this.g.select('.line').remove();
		this.g.append('path')
			.datum(data)
			.attr('class', 'line')
			.attr('d', line);
	}
}