export interface ILogger{
	title: string;
	
	LogEvent(eventTitle: string, eventData: string, moment: number);
	LogError(message: string, errorData: string, locals: string[], moment: number);
}