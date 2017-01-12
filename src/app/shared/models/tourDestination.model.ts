import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';


export class TourDestination extends BaseModel {
    static fromJsonList(array): TourDestination[] {
        return array.map(TourDestination.fromJson);
    }
    static fromJson({ $key, name, latitude, longitude,  createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt}): TourDestination {
        return new TourDestination(
            $key, name, latitude, longitude,  createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }
    constructor(
        id: string = null,
        public name: string = null,
        public latitude: number = 0,
        public longitude: number = 0,
        createdAt: Date = null,
        createdBy: string = null,
        modifiedAt: Date = new Date(),
        modifiedBy: string = null,
        isDeleted: boolean = false,
        deletedBy: string = null,
        deletedAt: Date = null
    ) {
        super(id, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }
}

