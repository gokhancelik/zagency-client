import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'za-booking-button',
    template: ' <a href="" [routerLink]="[\'/tour/booking/\'+tourScheduleId]" class="button green btn-small uppercase">Book Tour</a>'
})
export class BookingButtonComponent implements OnInit {
    @Input() tourScheduleId: number;
    constructor() { }

    ngOnInit() { }
}