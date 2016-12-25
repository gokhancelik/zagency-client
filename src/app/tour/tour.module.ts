import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { TourDetailedComponent, TourSimpleComponent, TourSmallItemComponent } from './packages';
import { TourDetail1Component } from './details';
import { GoToTourDetailButtonComponent, BookingButtonComponent } from './buttons';
import { RecommendedToursComponent, TravellersChoiceToursComponent, FlexSlider, TourListSmallItemComponent } from './lists';
import { TourComponent } from './tour.component'
import { TourBookingComponent } from './booking'

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule],
    exports: [TourDetailedComponent, TourSimpleComponent, TourDetail1Component, TourComponent, GoToTourDetailButtonComponent,
        TravellersChoiceToursComponent, RecommendedToursComponent, TourListSmallItemComponent, TourSmallItemComponent,
        TourBookingComponent, BookingButtonComponent],
    declarations: [TourDetailedComponent, TourSimpleComponent, TourDetail1Component, GoToTourDetailButtonComponent,
        TravellersChoiceToursComponent, RecommendedToursComponent, TourComponent, TourSmallItemComponent,
        FlexSlider, TourListSmallItemComponent, TourBookingComponent, BookingButtonComponent],
    providers: [],
})
export class TourModule { }
