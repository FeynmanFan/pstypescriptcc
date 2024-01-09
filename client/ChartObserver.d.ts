import { dataPacket } from "../shared/dataPacket";
import { Observer } from "./observer";
import * as d3 from "d3";
export default class ChartObserver extends Observer {
    xScale: d3.ScaleLinear<number, number>;
    yScale: d3.ScaleLinear<number, number>;
    svg: any;
    g: any;
    xAxis: d3.Axis<d3.NumberValue>;
    yAxis: d3.Axis<d3.NumberValue>;
    allData: Array<dataPacket>;
    constructor(chartId: string);
    receiveNotification(data: dataPacket): void;
    updateChart(data: dataPacket): void;
}
