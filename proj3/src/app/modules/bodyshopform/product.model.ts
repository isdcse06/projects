import { AxaltaProduct } from './axaltaproduct.model';
import { OtherProduct } from './other.product.model';
import { ActionDate } from './actiondate.model';


export class Product {
    ID: number;
    ProductName: string;
    MappingID: string;
    IsActive: boolean;
    AxaltaProductModel: AxaltaProduct = new AxaltaProduct();
    OtherProductModel: OtherProduct = new OtherProduct();
    ActionDateModel: ActionDate = new ActionDate();
}