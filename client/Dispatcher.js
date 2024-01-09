"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispatcher = void 0;
var Dispatcher = /** @class */ (function () {
    function Dispatcher() {
        this.observers = [];
    }
    Dispatcher.prototype.register = function (observer) {
        this.observers.push(observer);
    };
    Dispatcher.prototype.notify = function (packet) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var obs = _a[_i];
            obs.receiveNotification(packet);
        }
    };
    return Dispatcher;
}());
exports.Dispatcher = Dispatcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFBQTtRQUNJLGNBQVMsR0FBcUIsRUFBRSxDQUFDO0lBV3JDLENBQUM7SUFURyw2QkFBUSxHQUFSLFVBQVMsUUFBa0I7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxNQUFrQjtRQUNyQixLQUFnQixVQUFjLEVBQWQsS0FBQSxJQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjLEVBQUUsQ0FBQztZQUE1QixJQUFJLEdBQUcsU0FBQTtZQUNSLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxnQ0FBVSJ9