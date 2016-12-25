import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TourTypeService, TourPackage } from '../../shared'

@Component({
    selector: 'za-tour-list-small-item',
    templateUrl: 'tour-list-small-item.component.html'
})
export class TourListSmallItemComponent implements OnInit, OnChanges {
    @Input() tourTypeId: number = 0;
    list: Array<TourPackage> = new Array<TourPackage>();
    constructor(private ttService: TourTypeService) { }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.tourTypeId.currentValue) {
            this.ttService.getActiveTours(changes.tourTypeId.currentValue).subscribe(data => {
                this.list = data;
            });
        }
    }
}