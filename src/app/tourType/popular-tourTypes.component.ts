import { Component, OnInit } from '@angular/core';
// import { TourType, TourTypeService } from '../shared'
@Component({
    selector: 'za-popular-tour-types',
    templateUrl: 'popular-tourTypes.component.html'
})
export class PopularTourTypesComponent implements OnInit {
    // selectedTypeId: number = 0;
    // tourTypes: Array<TourType> = new Array<TourType>();
    // constructor(private ttService: TourTypeService) { }

    ngOnInit() {
        // this.ttService.getPopularProductTypes().subscribe(data => {
        //     for (let i = 0; i < data.length; i++) {
        //         let tt = new TourType(data[i]);
        //         if (this.selectedTypeId === 0) {
        //             this.selectedTypeId = tt.tourTypeId;
        //         }
        //         this.tourTypes.push(tt);
        //     }
        // })
    }
    // changeSelectedTypeId(id) {
    //     this.selectedTypeId = id;
    // }
}