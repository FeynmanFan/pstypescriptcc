import { dataPacket } from "../shared/dataPacket";
import { Observer } from "./observer.js";

export class Dispatcher {
    observers : Array<Observer> = [];

    register(observer: Observer): void {
        this.observers.push(observer);
    }

    pushData(packet: dataPacket): void {
        Observer.pushData(packet);
    }

    notify(): void {
        for (let obs of this.observers) {
            obs.receiveNotification();
        }
    }
}