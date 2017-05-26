import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [

    ],
    exports: [

    ],
    imports: [
        CommonModule
    ]
})
export class Ng2utilsModule {
    static forRoot() {
        return {
            ngModule: Ng2utilsModule,
            providers: []
        };
    }
}
