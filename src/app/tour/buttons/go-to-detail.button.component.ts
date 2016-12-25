import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'za-go-to-tour-detail-button',
    template: `<a [ngClass]="{'button':true, 'green-bg':buttonType===1, 'pull-right': buttonType===1,
                              'btn-small full-width': buttonType===2}" 
                                href="" [routerLink]="[\'/tour/detail/\'+tourScheduleId]">DETAIL</a>`
})
export class GoToTourDetailButtonComponent implements OnInit {
    @Input() tourScheduleId: number;
    @Input() buttonType: number=1;
    constructor() { }

    ngOnInit() {
        
     }
}