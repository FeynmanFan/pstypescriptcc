"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataPacket = void 0;
var dataPacket = /** @class */ (function () {
    function dataPacket(sensorId, time, value) {
        this.sensorId = sensorId;
        this.time = time;
        this.value = value;
    }
    Object.defineProperty(dataPacket.prototype, "sensorId", {
        get: function () {
            return this._sensorId;
        },
        set: function (value) {
            this._sensorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(dataPacket.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(dataPacket.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            // this sensor fails at 112 degrees
            if (value < 112) {
                this._value = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    dataPacket.prototype.toString = function () {
        return JSON.stringify({ "value": this.value, "time": this.time, "sensorId": this.sensorId });
    };
    dataPacket.getRandom = function (min, max) {
        var multiplier = Math.pow(10, dataPacket.DECIMAL_PLACES);
        var randomShifted = Math.floor(Math.random() * (max - min + 1) * multiplier) + min * multiplier;
        return randomShifted / multiplier;
    };
    dataPacket.simulatePacket = function () {
        return new dataPacket("12345", new Date().getTime(), dataPacket.getRandom(dataPacket.MIN_TEMP, dataPacket.MAX_TEMP));
    };
    dataPacket.DECIMAL_PLACES = 2;
    dataPacket.MIN_TEMP = -15;
    dataPacket.MAX_TEMP = 2;
    return dataPacket;
}());
exports.dataPacket = dataPacket;
