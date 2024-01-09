export declare class dataPacket {
    _sensorId: string;
    _time: number;
    _value: number;
    static DECIMAL_PLACES: number;
    static MIN_TEMP: number;
    static MAX_TEMP: number;
    constructor(sensorId: string, time: number, value: number);
    get sensorId(): string;
    set sensorId(value: string);
    get time(): number;
    set time(value: number);
    get value(): number;
    set value(value: number);
    toString(): string;
    static getRandom(min: number, max: number): number;
    static simulatePacket(): dataPacket;
}
