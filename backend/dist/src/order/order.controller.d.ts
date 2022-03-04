import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    findAll(): unknown;
    findById(id: any): unknown;
    create(body: any, req: any): unknown;
}
