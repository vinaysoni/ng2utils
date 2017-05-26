
import {RESULT_STATUS} from "../http/easyRest";
export interface IEventMessage {

    eventType: string;
    json?: string;
    obj?: any;
    error?:string;
    status: RESULT_STATUS;

}
