export class TourPackage {
    price: number;
    discount: number;
    thumbPhotoUrl: string;
    startDate: Date;
    endDate: Date;
    tourScheduleId: number;
    productBaseId: number;
    tourName: string;
    description: string;
    constructor(data: any = null) {
        if (data) {
            this.price = data.price;
            this.discount = data.discount;
            this.thumbPhotoUrl = data.thumbPhotoUrl;
            this.startDate = new Date(data.startDate);
            this.endDate = new Date(data.endDate);
            this.tourScheduleId = data.tourScheduleId;
            this.productBaseId = data.productBaseId;
            this.tourName = data.tourName;
            this.description = data.description;
        } else {
            this.price = 0;
            this.discount = 0;
            this.thumbPhotoUrl = '';
            this.startDate = new Date();
            this.endDate = new Date();
            this.tourScheduleId = 0;
            this.productBaseId = 0;
            this.tourName = '';
            this.description = '';
        }
    }
}