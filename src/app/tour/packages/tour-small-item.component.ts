import { Component, OnInit, Input } from '@angular/core';
import { TourPackage } from '../../shared'

@Component({
    selector: 'za-tour-small-item',
    templateUrl: 'tour-small-item.component.html'
})
export class TourSmallItemComponent implements OnInit {
    @Input() tour: TourPackage;
    constructor() { }

    ngOnInit() { }
}