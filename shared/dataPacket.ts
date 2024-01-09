export class dataPacket {
    _sensorId: string;
    _time: number;
    _value: number;

    static DECIMAL_PLACES = 2;

    static MIN_TEMP = -15;
    static MAX_TEMP = 2;

    constructor(sensorId: string, time: number, value: number) {
        this._sensorId = sensorId;
        this._time = time;
        this._value = value;
    }

    get sensorId() {
        return this._sensorId;
    }

    set sensorId(value: string) {
        this._sensorId = value;
    }

    get time() {
        return this._time;
    }

    set time(value: number) {
        this._time = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        // this sensor fails at 112 degrees
        if (value < 112) {
            this._value = value;
        }
    }

    toString(): string {
        return JSON.stringify({ "value": this.value, "time": this.time, "sensorId": this.sensorId });
    }

    static getRandom(min: number, max: number): number {
        const multiplier = Math.pow(10, dataPacket.DECIMAL_PLACES);

        const randomShifted = Math.floor(Math.random() * (max - min + 1) * multiplier) + min * multiplier;

        return randomShifted / multiplier;
    }

    static simulatePacket(): dataPacket {
        return new dataPacket("12345", new Date().getTime(), dataPacket.getRandom(dataPacket.MIN_TEMP, dataPacket.MAX_TEMP));
    }
}