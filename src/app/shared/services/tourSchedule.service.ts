import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service'
import { TourDetail } from '../models/'
@Injectable()
export class TourScheduleService extends BaseService {
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/TourSchedules';
    constructor(private http: Http) {
        super();
    }
    getDetail(id: number): Observable<TourDetail> {
        return this.http.get(this.API_URL + '/' + id + '/detail')
            .map(res => {
                let data = res.json();
                return data || {};
            })
            .catch(this.handleError);
    }
}