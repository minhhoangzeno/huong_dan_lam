import { Model } from 'mongoose';
import { OrderItemDocument } from 'src/order-item/schemas/order-item.schemas';
import { OrderDto } from './dto/order.dto';
import { OrderDocument } from './schemas/order.schemas';
export declare class OrderService {
    private orderModel;
    private orderItemModel;
    constructor(orderModel: Model<OrderDocument>, orderItemModel: Model<OrderItemDocument>);
    findAll(): unknown;
    findById(id: any): unknown;
    create(orderDto: OrderDto, orders: any, user: any): unknown;
    update(id: any, orderDto: any): unknown;
    delete(id: any): unknown;
}
