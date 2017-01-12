import {  TourDestination } from '../models/tourDestination.model';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourDestinationService extends BaseFirebaseService<TourDestination> {
    constructor(private _af: AngularFireDatabase,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tourDestinations', fb);
    }
    // public mapRelationalObject(obj: TourDestination) {
    //     obj.tourObj = this.tourService.getByKey(obj.tour);
    //     return obj;
    // }
    public fromJson(obj) {
        return TourDestination.fromJson(obj);
    }
    public fromJsonList(array) {
        return TourDestination.fromJsonList(array);
    }
    // public getByTourKey(tourKey): Observable<TourDestination[]> {
    //     // select * from TourDestination where tourId = key;
    //     const ts$ = this._af.list(this.getRoute(),
    //         { query: { orderByChild: 'tour', equalTo: tourKey } })
    //         .map(TourDestination.fromJsonList);
    //     return ts$;
    // }
    public getAll(): Observable<TourDestination[]> {
        let that = this;
        const tourDestinationInTour$ = this._af.list(this.getRoute())
            .map(this.fromJsonList);
           

        return tourDestinationInTour$;
    }
    // public getByKey(key): Observable<TourDestination> {
    //     let that = this;
    //     const tourDestination$ = this._af.object(this.getRoute() + '/' + key)
    //         .map(this.fromJson)
    //         .map(t => { return that.mapRelationalObject(t); });
    //     return tourDestination$;
    // }
}

