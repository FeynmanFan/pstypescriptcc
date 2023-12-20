"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Globomantics = void 0;
var Globomantics;
(function (Globomantics) {
    var eventHubManager = /** @class */ (function () {
        function eventHubManager() {
        }
        eventHubManager.prototype.connect = function () {
            // do stuff
        };
        eventHubManager.prototype.consume = function (json) {
            // do stuff
        };
        eventHubManager.prototype.close = function () {
            // do stuff
        };
        return eventHubManager;
    }());
    Globomantics.eventHubManager = eventHubManager;
})(Globomantics || (exports.Globomantics = Globomantics = {}));
