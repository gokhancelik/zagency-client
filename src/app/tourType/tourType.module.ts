import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { TourTypeComponent } from './tourType.component';
import { PopularTourTypesComponent } from './popular-tourTypes.component';
import { TourModule } from '../tour/tour.module';

@NgModule({
    imports: [RouterModule, SharedModule, CommonModule, TourModule],
    exports: [PopularTourTypesComponent],
    declarations: [TourTypeComponent, PopularTourTypesComponent],
    providers: [],
})
export class TourTypeModule { }
