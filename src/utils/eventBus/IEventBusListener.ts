import {IEventMessage} from "./IEventMessage";

export interface IEventBusListener {

    onEventHandler(item: IEventMessage);

}
