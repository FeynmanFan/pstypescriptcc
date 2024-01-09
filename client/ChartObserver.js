"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var observer_1 = require("./observer");
var d3 = __importStar(require("d3"));
var ChartObserver = /** @class */ (function (_super) {
    __extends(ChartObserver, _super);
    function ChartObserver(chartId) {
        var _this = _super.call(this) || this;
        _this.allData = [];
        var width = 1024;
        var height = 768;
        _this.svg = d3.select(chartId)
            .attr('width', width)
            .attr('height', height);
        _this.g = _this.svg.append('g')
            .attr('transform', 'translate(50, 50)');
        _this.xScale = d3.scaleLinear().range([0, width - 100]);
        _this.yScale = d3.scaleLinear().range([height - 100, 0]);
        _this.xAxis = d3.axisBottom(_this.xScale).scale(_this.xScale);
        _this.yAxis = d3.axisLeft(_this.yScale).scale(_this.yScale);
        _this.svg.append('g')
            .attr('class', 'x-axis')
            .attr('transform', "translate(50, ".concat(height - 50, ")"));
        _this.svg.append('g')
            .attr('class', 'y-axis')
            .attr('transform', 'translate(50, 50)');
        return _this;
    }
    ChartObserver.prototype.receiveNotification = function (data) {
        this.svg = d3.select("body");
        this.updateChart(data);
    };
    ChartObserver.prototype.updateChart = function (data) {
        var _this = this;
        console.info("Updating chart");
        this.xScale.domain([0, this.allData.length - 1]);
        this.yScale.domain([d3.min(this.allData, function (d) { return d.value; }), d3.max(this.allData, function (d) { return d.value; })]);
        this.svg.select('.x-axis').call(this.xAxis);
        this.svg.select('.y-axis').call(this.yAxis);
        var line = d3.line()
            .x(function (d) { return _this.xScale(d[0]); })
            .y(function (d) { return _this.yScale(d[1]); });
        this.g.select('.line').remove();
        this.g.append('path')
            .datum(data)
            .attr('class', 'line')
            .attr('d', line);
    };
    return ChartObserver;
}(observer_1.Observer));
exports.default = ChartObserver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRPYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNoYXJ0T2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVDQUFxQztBQUNyQyxxQ0FBeUI7QUFFekI7SUFBMkMsaUNBQVE7SUFTbEQsdUJBQVksT0FBZTtRQUMxQixZQUFBLE1BQUssV0FBRSxTQUFDO1FBSFQsYUFBTyxHQUFzQixFQUFFLENBQUM7UUFLL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUVuQixLQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQzNCLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFekIsS0FBSSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRXpDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEQsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNELEtBQUksQ0FBQyxL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