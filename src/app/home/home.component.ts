import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  statesWithFlags: Array<string> = ['Ankara', 'Istanbul'];
  tourSearchModel: any;
  searchDestination = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(term => term === '' ? []
        : this.statesWithFlags.filter(v => new RegExp(term, 'gi').test(v)).slice(0, 10));
  constructor() {
    this.tourSearchModel = { departure: null, target: null, start: NgbDateStruct, end: NgbDateStruct };;
  }
  ngOnInit() {

  }
  searchTour(event) {
    console.log(event);
    console.log(this.tourSearchModel);
  }
}
