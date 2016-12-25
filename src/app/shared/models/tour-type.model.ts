export class TourType {
    tourTypeId: number;
    name: string;
    constructor(data = null) {
        if (data) {
            this.name = data.name;
            this.tourTypeId = data.productTypeId || data.tourTypeId;
        } else {
            this.name = '';
            this.tourTypeId = 0;
        }
    }
}