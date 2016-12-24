import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { Tour } from '../../shared'

@Component({
    selector: 'za-tour-simple',
    templateUrl: 'tour-simple.component.html'
})
export class TourSimpleComponent implements OnInit,OnChanges {
    @Input() tour: Tour;
    constructor() { }

    ngOnInit() { 
    }
    ngOnChanges(changes){
    }
}