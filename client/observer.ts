import {dataPacket } from "../shared/dataPacket"

export abstract class Observer {
    static allData = new Array<dataPacket>;

    static pushData(packet: dataPacket): void {
        this.allData.push(packet);
        if (this.allData.length > 10) {
            this.allData.shift();
        }
    }

    abstract receiveNotification():void;
}