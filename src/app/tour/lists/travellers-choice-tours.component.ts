import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import { TourService, TourPackage } from '../../shared'

@Component({
    selector: 'za-travellers-choice-tours',
    templateUrl: 'travellers-choice-tours.component.html'
})
export class TravellersChoiceToursComponent implements OnInit {
    constructor(private tourService: TourService) { }

    list: Array<TourPackage> = new Array<TourPackage>();
    ngOnInit() {
        this.tourService.getNearestTours().subscribe(data => {
            this.list = data;
            jQuery('.za-travellers-choice-tours')
        })
    }
}
@Directive({
    selector: "[ng2-flexslider]"
})
export class FlexSlider {
    constructor(el: ElementRef) {
        jQuery(el.nativeElement).flexslider({
            animation: 'slide',
            itemWidth: 270,
            itemMargin: 30,
        });
    }
}