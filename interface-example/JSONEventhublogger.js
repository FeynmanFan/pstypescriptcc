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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONEventHubLogger = void 0;
var eventhublogger_1 = require("./eventhublogger");
var JSONEventHubLogger = /** @class */ (function (_super) {
    __extends(JSONEventHubLogger, _super);
    function JSONEventHubLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONEventHubLogger.prototype.createEvent = function (eventTitle, eventData, moment) {
        // create event
        return JSON.stringify({ "title": eventTitle, "data": eventData, "moment": moment });
    };
    JSONEventHubLogger.prototype.createError = function (message, errorData, locals, moment) {
        return JSON.stringify({ "title": message, "data": errorData + '\n' + locals.join(';'), "moment": moment });
    };
    return JSONEventHubLogger;
}(eventhublogger_1.eventHubLogger));
exports.JSONEventHubLogger = JSONEventHubLogger;
