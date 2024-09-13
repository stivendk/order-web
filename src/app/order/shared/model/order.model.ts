import { OrderItemModel } from "./order-item.model";

export interface OrderModel{
    id: number;
    totalAmount: number;
    createdAt: Date;
    updatedAt: Date;
    items: OrderItemModel[];
}