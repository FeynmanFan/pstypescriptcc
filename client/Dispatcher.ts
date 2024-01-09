import { dataPacket } from "../shared/dataPacket";
import { Observer } from "./observer";

export class Dispatcher {
    observers : Array<Observer> = [];

    register(observer: Observer) {
        this.observers.push(observer);
    }

    notify(packet: dataPacket) {
        for (let obs of this.observers) {
            obs.receiveNotification(packet);
        }
    }
}