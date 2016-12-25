import { Component, OnInit } from '@angular/core';
import { TourScheduleService, TourDetail } from '../../shared'
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'za-tour-detail1',
    templateUrl: 'tour-detail1.component.html'
})
export class TourDetail1Component implements OnInit {
    constructor(private service: TourScheduleService, private router: Router,
        private activetedRoute: ActivatedRoute) { }
    detail: TourDetail;
    ngOnInit() {
        this.activetedRoute.params.forEach((params: Params) => {
            let id = params['id'];
            this.service.getDetail(id)
                .subscribe(
                data => {
                    this.detail = data;
                });
        });

    }
}