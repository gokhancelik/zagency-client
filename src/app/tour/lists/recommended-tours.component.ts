import { Component, OnInit } from '@angular/core';
import { TourService, Tour } from '../../shared'
@Component({
    selector: 'za-recommended-tours',
    templateUrl: 'recommended-tours.component.html'
})
export class RecommendedToursComponent implements OnInit {
    constructor(private tourService: TourService) { }
    list: Array<Tour> = new Array<Tour>();


    ngOnInit() {
        this.tourService.getNearestTours().subscribe(data => {
            this.list = data;
        })
    }
}