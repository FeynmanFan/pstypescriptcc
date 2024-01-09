import {dataPacket } from "../shared/dataPacket"

export abstract class Observer {
    abstract receiveNotification(data: dataPacket):any;
}