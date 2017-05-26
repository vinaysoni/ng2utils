import {EventMessage} from './EventMessage';
import {EventEmitter} from "@angular/core";
import {IEventBusListener} from "./IEventBusListener";
import {RESULT_STATUS} from "../http/easyRest";

/**
 * This class via a single event subject (emitter/subscriber(s)) can manage events
 * of any EventMessage type.
 */
export class AnyEventService {

    dispatcher: EventEmitter<any> = new EventEmitter();

    constructor() {}


    emitMessageEvent( eventType: string, status: RESULT_STATUS, json?: string, obj?: any, statusMsg?: string){
        let message = new EventMessage(eventType, status, json, obj, statusMsg);
        this.dispatcher.emit(message);
    }

    getEmitter() {
        return this.dispatcher;
    }

    addListener(listener: IEventBusListener): any {

        let subscription: any = this.getEmitter()
            .subscribe(item => listener.onEventHandler(item));

    }
}
