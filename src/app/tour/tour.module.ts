import { NgModule } from '@angular/core';

import { TourDetailedComponent, TourSimpleComponent } from './components';
import { RecommendedToursComponent, TravellersChoiceToursComponent } from './lists';

@NgModule({
    imports: [],
    exports: [TourDetailedComponent, TourSimpleComponent,
        TravellersChoiceToursComponent, RecommendedToursComponent],
    declarations: [TourDetailedComponent, TourSimpleComponent,
        TravellersChoiceToursComponent, RecommendedToursComponent],
    providers: [],
})
export class TourModule { }
