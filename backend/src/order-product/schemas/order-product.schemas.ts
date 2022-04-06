import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Order } from 'src/order/schemas/order.schemas';
import { Product } from 'src/product/schemas/product.schemas';

export type OrderProductDocument = OrderProduct & Document;

@Schema()
export class OrderProduct {
  @Prop()
  id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  product: Product

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' })
  order: Order

  @Prop()
  amount: Number

  @Prop()
  price: Number

}


export const OrderProductSchema = SchemaFactory.createForClass(OrderProduct);
