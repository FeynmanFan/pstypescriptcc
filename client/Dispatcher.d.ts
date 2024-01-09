import { dataPacket } from "../shared/dataPacket";
import { Observer } from "./observer";
export declare class Dispatcher {
    observers: Array<Observer>;
    register(observer: Observer): void;
    notify(packet: dataPacket): void;
}
