import {IEventMessage} from './IEventMessage';
import {RESULT_STATUS} from "../http/easyRest";

export class EventMessage implements IEventMessage {


    constructor(public eventType: string,
                public status: RESULT_STATUS,
                public json?: string,
                public obj?: any,
                public statusMsg?:string) {
    }


}
