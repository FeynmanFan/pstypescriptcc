Object.defineProperty(exports, "__esModule", { value: true });
exports.untypedCalculator = void 0;
var untypedCalculator = (function () {
    function add(augend1, addend2) {
        return augend1 + addend2;
    }

    function subtract(minuend, subtrahend) {
        return minuend - subtrahend;
    }

    function divide(dividend, divisor) {
        return dividend / divisor;
    }
}());
exports.untypedCalculator = untypedCalculator;