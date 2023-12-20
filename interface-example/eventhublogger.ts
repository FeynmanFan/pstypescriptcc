import { Globomantics } from './Globomantics.EventHub';
import { ILogger } from './ILogger';

export abstract class eventHubLogger implements ILogger
{
	title: string;

	constructor(){
		this.title = "Event Hub Logger";
	}
	
	abstract createEvent(eventTitle: string, eventData: string, moment: number): string;

	LogEvent(eventTitle: string, eventData: string, moment: number, otherThing?: string){
		// address read from environment
		var ehm = new Globomantics.eventHubManager();

		// let moment = 12345;
		
		ehm.connect();
		
		var event = this.createEvent(eventTitle, eventData, moment); //{"title": eventTitle, "data": eventData, "moment": moment};
		
		ehm.consume(event);
		
		ehm.close();
	}
	
	abstract createError(message: string, errorData: string, locals: string[], moment: number):string;
	
	LogError(message: string, errorData: string, locals: string[], moment: number){
		// address read from environment
		var ehm = new Globomantics.eventHubManager();
		
		ehm.connect();
		
		var event = this.createError(message, errorData, locals, moment); //{"title": message, "data": errorData + '\n' + locals.join(';'), "moment": moment};
		
		ehm.consume(event);
		
		ehm.close();
	}
}