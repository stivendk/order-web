import { ProductModel } from "./product.model";

export class OrderItemModel {
    id!: number;
    quantity!: number;
    priceAtPurchase!: number;
    product!: ProductModel;
}