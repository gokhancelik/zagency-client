import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'za-recommended-tours',
    templateUrl: 'recommended-tours.component.html'
})
export class RecommendedToursComponent implements OnInit {
    constructor() { }
    list:Array<any>=new Array<any>();


    ngOnInit() {
        for(let i=0;i<5;i++)
        this.list.push({});
     }
}