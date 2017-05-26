import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {EasyRestService} from './utils/http/easyRest';
import {TypedEventService} from './utils/eventBus/TypedEventService';
import {AnyEventService} from './utils/eventBus/AnyEventService';
import {JsonConvert} from "./utils/eventBus/json-convert";

@NgModule({
    declarations: [

    ],
    exports: [
        AnyEventService, TypedEventService, EasyRestService, JsonConvert
    ],
    imports: [
        CommonModule
    ]
})
export class Ng2utilsModule {
    static forRoot() {
        return {
            ngModule: Ng2utilsModule,
            providers: [ AnyEventService, TypedEventService, EasyRestService, JsonConvert]
        };
    }
}
