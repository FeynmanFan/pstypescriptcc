import { eventHubLogger } from './eventhublogger';

export class JSONEventHubLogger extends eventHubLogger{
    createEvent(eventTitle: string, eventData: string, moment: number): string{
        // create event
        return JSON.stringify({"title": eventTitle, "data": eventData, "moment": moment});
    }

    createError(message: string, errorData: string, locals: string[], moment: number):string{
        return JSON.stringify({"title": message, "data": errorData + '\n' + locals.join(';'), "moment": moment});
    }
}