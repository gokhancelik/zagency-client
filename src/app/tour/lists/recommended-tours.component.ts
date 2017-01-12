import { Component, OnInit } from '@angular/core';
// import { TourService, TourPackage } from '../../shared'
@Component({
    selector: 'za-recommended-tours',
    templateUrl: 'recommended-tours.component.html'
})
export class RecommendedToursComponent implements OnInit {

    ngOnInit()
    {}
    // constructor(private tourService: TourService) { }
    // list: Array<TourPackage> = new Array<TourPackage>();


    // ngOnInit() {
    //     this.tourService.getNearestTours().subscribe(data => {
    //         this.list = data;
    //     })
    // }
}