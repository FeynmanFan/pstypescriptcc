"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createkvp(key, value) {
    return { key: key, value: value };
}
var numberPair = createkvp("meaning of life", 42);
var boolPair = createkvp("knows TypeScript", true);
var boolPairs = [
    { key: "knows security", value: true },
    { key: "knows Python", value: true },
    { key: "knows C#", value: true }
];
for (var _i = 0, boolPairs_1 = boolPairs; _i < boolPairs_1.length; _i++) {
    var pair = boolPairs_1[_i];
    console.log(pair.key + ": " + pair.value);
}
