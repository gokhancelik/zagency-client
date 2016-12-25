import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service'
import { TourPackage } from '../models/'
@Injectable()
export class TourService extends BaseService {
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/Tours';
    constructor(private http: Http) {
        super();
    }
    getNearestTours(): Observable<Array<TourPackage>> {
        return this.http.get(this.API_URL + '/nearesttours')
            .map(res => {
                let data = res.json();
                let list: Array<TourPackage> = new Array<TourPackage>();
                for (let i = 0; i < data.length; i++) {
                    let t: TourPackage = new TourPackage(data[i]);
                    list.push(t);
                }
                return list || {};
            })
            .catch(this.handleError);
    }
}