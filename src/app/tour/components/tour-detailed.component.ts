import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../../shared'

@Component({
    selector: 'za-tour-detailed',
    templateUrl: 'tour-detailed.component.html'
})
export class TourDetailedComponent implements OnInit {
    @Input() tour: Tour;
    constructor() { }

    ngOnInit() { }
}