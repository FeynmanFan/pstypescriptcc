"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventHubLogger = void 0;
var Globomantics_EventHub_1 = require("./Globomantics.EventHub");
var eventHubLogger = /** @class */ (function () {
    function eventHubLogger() {
        this.title = "Event Hub Logger";
    }
    eventHubLogger.prototype.LogEvent = function (eventTitle, eventData, moment, otherThing) {
        // address read from environment
        var ehm = new Globomantics_EventHub_1.Globomantics.eventHubManager();
        // let moment = 12345;
        ehm.connect();
        var event = this.createEvent(eventTitle, eventData, moment); //{"title": eventTitle, "data": eventData, "moment": moment};
        ehm.consume(JSON.stringify(event));
        ehm.close();
    };
    eventHubLogger.prototype.LogError = function (message, errorData, locals, moment) {
        // address read from environment
        var ehm = new Globomantics_EventHub_1.Globomantics.eventHubManager();
        ehm.connect();
        var event = this.createError(message, errorData, locals, moment); //{"title": message, "data": errorData + '\n' + locals.join(';'), "moment": moment};
        ehm.consume(JSON.stringify(event));
        ehm.close();
    };
    return eventHubLogger;
}());
exports.eventHubLogger = eventHubLogger;
