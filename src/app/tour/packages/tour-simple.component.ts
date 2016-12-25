import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { TourPackage } from '../../shared'

@Component({
    selector: 'za-tour-simple',
    templateUrl: 'tour-simple.component.html'
})
export class TourSimpleComponent implements OnInit,OnChanges {
    @Input() tour: TourPackage;
    constructor() { }

    ngOnInit() { 
    }
    ngOnChanges(changes){
    }
}