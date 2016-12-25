import { Component, OnInit, Input } from '@angular/core';
import { TourPackage } from '../../shared'

@Component({
    selector: 'za-tour-detailed',
    templateUrl: 'tour-detailed.component.html'
})
export class TourDetailedComponent implements OnInit {
    @Input() tour: TourPackage;
    constructor() { }

    ngOnInit() { }
}