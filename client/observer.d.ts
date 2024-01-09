import { dataPacket } from "../shared/dataPacket";
export declare abstract class Observer {
    abstract receiveNotification(data: dataPacket): any;
}
