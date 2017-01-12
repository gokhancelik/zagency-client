import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { TourDetailedComponent, TourSimpleComponent, TourSmallItemComponent,TourXSmallItemComponent } from './packages';
import { GoToTourDetailButtonComponent, BookingButtonComponent } from './buttons';
import { RecommendedToursComponent, TravellersChoiceToursComponent
    } from './lists';
import { TourComponent } from './tour.component'
import { TourBookingComponent } from './booking'

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule],
    exports: [TourDetailedComponent, TourSimpleComponent, TourComponent, GoToTourDetailButtonComponent,
        TravellersChoiceToursComponent, RecommendedToursComponent, TourSmallItemComponent,
        TourBookingComponent, BookingButtonComponent,TourXSmallItemComponent],
    declarations: [TourDetailedComponent, TourSimpleComponent, GoToTourDetailButtonComponent,
        TravellersChoiceToursComponent, RecommendedToursComponent, TourComponent, TourSmallItemComponent,
          TourBookingComponent, BookingButtonComponent,TourXSmallItemComponent,
        ],
    providers: [],
})
export class TourModule { }
