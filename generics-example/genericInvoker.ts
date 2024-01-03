export class Invoker{
    executeCommand<Type extends ICommand>(command: Type){
        command.execute();
    }
}