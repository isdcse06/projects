export class Account {

    constructor(data:any){
        this.ShopName = data.ShopName == null ? '&nbsp': data.ShopName;
        this.Rating = data.Rating == null ? '&nbsp': data.Rating;
        this.Address = data.Address == null ? '&nbsp': data.Address;
        this.MonthySales = data.MonthySales == null? 0 : data.MonthySales;
        this.Town = data.Town == null ? '&nbsp': data.Town;
        this.State = data.State == null ? '&nbsp': data.State;
        this.Brand = data.Brand == null ? '&nbsp': data.Brand;
        this.Representative = data.Representative == null ? '&nbsp': data.Representative.Title;
        this.BusinessCard = data.BusinessCard == null ? '&nbsp': data.BusinessCard;
        this.Distributor = data.Distributor == null ? '&nbsp': data.Distributor;
        this.Months = data.Months == null? 0 : data.Months;
        this.ID = data.ID;
    }



    ShopName: string;
    Rating: string;
    Address: string;
    MonthySales: number;
    Town:string;
    State: string;
    Brand:string;
    Representative:string;
    BusinessCard:string;
    Distributor:string;
    Months:number;
    ID : number;
}