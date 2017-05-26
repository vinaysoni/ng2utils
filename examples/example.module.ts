import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { Ng2utilsModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        Ng2utilsModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
