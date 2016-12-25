import 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service'
import { TourType, TourPackage } from '../models/'
@Injectable()
export class TourTypeService extends BaseService {
    API_URL: string = 'http://zagency.azurewebsites.net/api/v0.1/ProductTypes';
    constructor(private http: Http) {
        super();
    }
    getPopularProductTypes(): Observable<Array<TourType>> {
        return this.http.get(this.API_URL + '/populerproducttypes')
            .map(res => {
                let data = res.json();
                let list: Array<TourType> = new Array<TourType>();
                for (let i = 0; i < data.length; i++) {
                    let t: TourType = new TourType(data[i]);
                    list.push(t);
                }
                return list || {};
            })
            .catch(this.handleError);
    }
    getActiveTours(tourTypeId: number): Observable<Array<TourPackage>> {
        return this.http.get(this.API_URL + '/' + tourTypeId + '/activetours')
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