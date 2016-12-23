import { NgModule } from '@angular/core';

import { TourDetailedComponent, TourSimpleComponent } from './components';

@NgModule({
    imports: [],
    exports: [TourDetailedComponent, TourSimpleComponent],
    declarations: [TourDetailedComponent, TourSimpleComponent],
    providers: [],
})
export class TourModule { }
