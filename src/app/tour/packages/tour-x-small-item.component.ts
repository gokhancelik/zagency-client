import { Component, OnInit,Input } from '@angular/core';
import { TourPackage } from '../../shared'

@Component({
    selector: 'za-tour-x-small-item',
    templateUrl: 'tour-x-small-item.component.html'
})
export class TourXSmallItemComponent implements OnInit {
    @Input() tour: TourPackage;
    constructor() { }
    ngOnInit() { }
}