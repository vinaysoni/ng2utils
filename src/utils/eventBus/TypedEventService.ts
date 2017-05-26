import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

export type UserEventType = { new(): any };

@Injectable()

export class TypedEventService {


  myMap: Map<string, Subject<UserEventType>> = new Map<string, Subject<UserEventType>>();

  emit(classObject: UserEventType, object: any, id: string = ""): void {
    let key: string = classObject.name + id;
    let obs: Subject<UserEventType> = this.myMap.get(key);
    if (obs == null) {
      obs = new Subject<UserEventType>();
      this.myMap.set(key, obs);
    }
    obs.next(object);
  }

  sub(classObject: UserEventType, obj: any, func: string, id: string = ""): void {
    let key: string = classObject.name + id;
    let obs: Subject<UserEventType> = this.myMap.get(key);
    if (obs == null) {
      obs = new Subject<UserEventType>();
      this.myMap.set(key, obs);
    }

    obs.subscribe(event => {
      if (obj[func] && obj[func] instanceof Function) {
        obj[func](event);
      } else {
        throw new Error("Function '" + func + "' is not a valid function");
      }

    });
  }
}
