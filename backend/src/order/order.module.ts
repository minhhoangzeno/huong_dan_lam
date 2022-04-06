import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderProduct, OrderProductSchema } from 'src/order-product/schemas/order-product.schemas';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order, OrderSchema } from './schemas/order.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  MongooseModule.forFeature([{ name: OrderProduct.name, schema: OrderProductSchema }])
],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
