export class Summary {

    constructor(data:any){
        this.ShopName = data.BodyshopName == null ? '&nbsp': data.BodyshopName;
        this.Rating = data.Rating == null ? '&nbsp': data.Rating;
        this.MonthySales = data.Avg_Monthly_Sales == null ? '&nbsp': data.Avg_Monthly_Sales;
        this.Representative = data.AccountOwner == null ? '&nbsp': data.AccountOwner.Title;
        this.Distributor = data.Distributor == null ? '&nbsp': data.Distributor;
        this.UpdatedDate = this.setDate(data.AuditDate);
        this.Axalta_Prod_1 = this.setColor(data.Axalta_Prod_1,data.Others_Prod_1);
        this.Axalta_Prod_2 = this.setColor(data.Axalta_Prod_2,data.Others_Prod_2);
        this.Axalta_Prod_3 = this.setColor(data.Axalta_Prod_3,data.Others_Prod_3);
        this.Axalta_Prod_4 = this.setColor(data.Axalta_Prod_4,data.Others_Prod_4);
        this.Axalta_Prod_5 = this.setColor(data.Axalta_Prod_5,data.Others_Prod_5);
        this.Axalta_Prod_6 = this.setColor(data.Axalta_Prod_6,data.Others_Prod_6);
        this.Axalta_Prod_7 = this.setColor(data.Axalta_Prod_7,data.Others_Prod_7);
        this.Axalta_Prod_8 = this.setColor(data.Axalta_Prod_8,data.Others_Prod_8);
        this.Axalta_Prod_9 = this.setColor(data.Axalta_Prod_9,data.Others_Prod_9);
        this.Axalta_Prod_10 = this.setColor(data.Axalta_Prod_10,data.Others_Prod_10);
        this.Axalta_Prod_11 = this.setColor(data.Axalta_Prod_11,data.Others_Prod_11);
        this.Axalta_Prod_12 = this.setColor(data.Axalta_Prod_12,data.Others_Prod_12);
        this.Axalta_Prod_13 = this.setColor(data.Axalta_Prod_13,data.Others_Prod_13);
        this.Axalta_Prod_14 = this.setColor(data.Axalta_Prod_14,data.Others_Prod_14);
        this.Axalta_Prod_15 = this.setColor(data.Axalta_Prod_15,data.Others_Prod_15);
        this.Axalta_Prod_16 = this.setColor(data.Axalta_Prod_16,data.Others_Prod_16);
        this.Axalta_Prod_17 = this.setColor(data.Axalta_Prod_17,data.Others_Prod_17);
        this.Axalta_Prod_18 = this.setColor(data.Axalta_Prod_18,data.Others_Prod_18);
        this.Axalta_Prod_19 = this.setColor(data.Axalta_Prod_19,data.Others_Prod_19);
        this.Axalta_Prod_20 = this.setColor(data.Axalta_Prod_20,data.Others_Prod_20);
        this.ID = data.ID;
    }

    ShopName: string;
    Rating: string;
    MonthySales: number;
    Representative:string;
    Distributor:string;
    ID : number;
    UpdatedDate: string;
    Axalta_Prod_1:string;
    Axalta_Prod_2:string;
    Axalta_Prod_3:string;
    Axalta_Prod_4:string;
    Axalta_Prod_5:string;
    Axalta_Prod_6:string;
    Axalta_Prod_7:string;
    Axalta_Prod_8:string;
    Axalta_Prod_9:string;
    Axalta_Prod_10:string;
    Axalta_Prod_11:string;
    Axalta_Prod_12:string;
    Axalta_Prod_13:string;
    Axalta_Prod_14:string;
    Axalta_Prod_15:string;
    Axalta_Prod_16:string;
    Axalta_Prod_17:string;
    Axalta_Prod_18:string;
    Axalta_Prod_19:string;
    Axalta_Prod_20:string;

    setColor(Axalta_Prod:any,Other_Prod:any):string{
        if((Axalta_Prod != null && Axalta_Prod.replace(/,/g , "").toUpperCase().indexOf("N/A") > -1) || (Other_Prod != null && Other_Prod.replace(/,/g , "").toUpperCase().indexOf("N/A") > -1)) {
            return '<span class="white-color">N/A<span>';
        }else{
            if((Axalta_Prod != null && Axalta_Prod.replace(/,/g , "").length > 0) && (Other_Prod != null && Other_Prod.replace(/,/g , "").length > 0)){
                return '<span class="red-green-color"><span>';
            }else if((Axalta_Prod != null && Axalta_Prod.replace(/,/g , "").length > 0) && (Other_Prod == null || Other_Prod.replace(/,/g , "").length == 0)){
                return '<span class="green-color"><span>';
            }else if((Axalta_Prod == null || Axalta_Prod.replace(/,/g , "").length == 0) && (Other_Prod != null && Other_Prod.replace(/,/g , "").length > 0)){
                return '<span class="red-color"><span>';
            }else{
                return '<span class="white-color">&nbsp<span>';
            }
        }
        
    }

    setDate(date:any){
        if(date != null){
            const [day, month, year] = date.split("/")
            return this.formatDate(new Date(year, month - 1, day));
        }
    }

    formatDate(date:Date){
        var locale='en-us';
        return date.toLocaleString(locale, { month: "short" })+ "-" + date.getFullYear();
    }
}

export class Product{
     ID: number;
     ProductName: string;
     MappingID: string;
     IsActive: boolean;
     constructor(data:any){
         this.ProductName = data.ProductName == null ? '&nbsp' : data.ProductName;
         this.MappingID = data.MappingID == null ? '&nbsp' : data.MappingID;
         this.IsActive = data.IsActive;
         this.ID = data.ID;
     }
}