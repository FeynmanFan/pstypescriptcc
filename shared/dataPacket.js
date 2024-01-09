"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataPacket = void 0;
var dataPacket = /** @class */ (function () {
    function dataPacket(sensorId, time, value) {
        this._sensorId = sensorId;
        this._time = time;
        this._value = value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YVBhY2tldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFQYWNrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7SUFVSSxvQkFBWSxRQUFnQixFQUFFLElBQVksRUFBRSxLQUFhO1FBQ3JELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQkFBSSxnQ0FBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFhLEtBQWE7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw0QkFBSTthQUFSO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFTLEtBQWE7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw2QkFBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsbUNBQW1DO1lBQ25DLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLENBQUM7UUFDTCxDQUFDOzs7T0FQQTtJQVNELDZCQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVNLG9CQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxHQUFXO1FBQ3JDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUzRCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQztRQUVsRyxPQUFPLGFBQWEsR0FBRyxVQUFVLENBQUM7SUFDdEMsQ0FBQztJQUVNLHlCQUFjLEdBQXJCO1FBQ0ksT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDekgsQ0FBQztJQXBETSx5QkFBYyxHQUFHLENBQUMsQ0FBQztJQUVuQixtQkFBUSxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ2YsbUJBQVEsR0FBRyxDQUFDLENBQUM7SUFrRHhCLGlCQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksZ0NBQVUifQ==