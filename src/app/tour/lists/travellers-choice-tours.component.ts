import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'za-travellers-choice-tours',
    templateUrl: 'travellers-choice-tours.component.html'
})
export class TravellersChoiceToursComponent implements OnInit {
    constructor() { }
    list: Array<any> = new Array<any>();
    ngOnInit() {
        for (let i = 0; i < 5; i++)
            this.list.push({});
    }
}