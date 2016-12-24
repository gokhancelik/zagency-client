import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { TourDetailedComponent, TourSimpleComponent } from './components';
import { RecommendedToursComponent, TravellersChoiceToursComponent, FlexSlider } from './lists';

@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [TourDetailedComponent, TourSimpleComponent,
        TravellersChoiceToursComponent, RecommendedToursComponent],
    declarations: [TourDetailedComponent, TourSimpleComponent,
        TravellersChoiceToursComponent, RecommendedToursComponent,
        FlexSlider],
    providers: [],
})
export class TourModule { }
