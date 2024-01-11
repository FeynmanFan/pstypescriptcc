import { Observer } from "./observer.js"

export class ConsoleObserver extends Observer {
    receiveNotification(): void {
        console.info("Packet received; details follow")
        console.dir(Observer.allData[Observer.allData.length - 1]);
    }
}