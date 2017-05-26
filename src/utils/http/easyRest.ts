import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/publishReplay";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/exhaustMap";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/repeat";
import "rxjs/add/operator/retry";
import {IEventBusListener} from "../eventBus/IEventBusListener";
import {AnyEventService} from "../eventBus/AnyEventService";
import {Observable} from "rxjs/Observable";

import 'rxjs/Rx';
import {JsonConvert} from "../eventBus/json-convert";

@Injectable()

export class EasyRestService {


  constructor(private _http: Http, public ebus: AnyEventService) {
  }

  getTypedData(eventType: string, url: string, classObject: { new(): any }, prefix?: string, reload: boolean = true): any {

      let obs = this._http.get(url)
      .map((res: Response) => {
        return res.json().content;
      });

      obs.
        subscribe(jSonResponse => {
        let str = JSON.stringify(jSonResponse);
        console.log(str);
        let str1 = str;
        if ( prefix != null )
          str1 = `{ "${prefix}": ${str} }`;
        let user: any = JsonConvert.deserializeString(str1, classObject);
        this.ebus.emitMessageEvent(eventType, RESULT_STATUS.SUCCESS, null, user);
        //populate = user;
        return user;
      },
      error => {
          console.log(error);
          this.ebus.emitMessageEvent(eventType, RESULT_STATUS.FAILURE, "", null, error);
      });

  }


  getTypedDataRequest(getReq: GetRequest): any {

     let obs = this._http.get(getReq.url)
      .map((res: Response) => {
        return res.json();
      });

    obs.subscribe(jSonResponse => {
        let str = JSON.stringify(jSonResponse);

        let user: any = JsonConvert.deserializeString(str, getReq.classObject);
        this.ebus.emitMessageEvent(getReq.eventType, RESULT_STATUS.SUCCESS, "", user);
      }, error => {
        console.log(error);
        this.ebus.emitMessageEvent(getReq.eventType, RESULT_STATUS.FAILURE, "", null, error);
      });

  }

}

export interface GetRequest {
  eventType: string;
  url: string;
  classObject: { new(): any };
  prefix?: string;
  reload?: boolean;
}

export enum RESULT_STATUS{SUCCESS, FAILURE, WARNING, INFO};

