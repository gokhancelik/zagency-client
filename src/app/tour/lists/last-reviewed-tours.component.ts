import { Component, OnInit } from '@angular/core';
import { TourService, TourPackage } from '../../shared'

@Component({
    selector: 'last-reviewed-tours',
    templateUrl: 'last-reviewed-tours.component.html'
})
export class LastReviedToursComponent implements OnInit {
    list: Array<TourPackage> = new Array<TourPackage>();
    constructor(private tourService: TourService) { }

    ngOnInit() {
        this.tourService.getLastReviewedTours().subscribe(data => {
            this.list = data;
        });
    }
}