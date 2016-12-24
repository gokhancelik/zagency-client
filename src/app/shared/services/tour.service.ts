import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service'
import { Tour } from '../models/tour.model'
@Injectable()
export class TourService extends BaseService {
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/Tours';
    constructor(private http: Http) {
        super();
    }
    getNearestTours(): Observable<Array<Tour>> {
        return this.http.get(this.API_URL + '/nearesttours')
            .map(res => {
                let data = res.json();
                let list: Array<Tour> = new Array<Tour>();
                for (let i = 0; i < data.length; i++) {
                    let t: Tour = new Tour(data[i]);
                    list.push(t);
                }
                return list || {};
            })
            .catch(this.handleError);
    }
}