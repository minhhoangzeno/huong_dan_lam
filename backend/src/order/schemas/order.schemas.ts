import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';
import { OrderProduct } from 'src/order-product/schemas/order-product.schemas';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  id: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: {
      fullName: { type: String }, phoneNumber: { type: String },
      email: { type: String },
      city: { type: String },
      district: { type: String },
      address: { type: String },
    }
  })
  peopleSend: {
    fullName: String,
    phoneNumber: String,
    city: String,
    district: String,
    address: String,
    email: string
  }

  @Prop({
    type: {
      fullName: { type: String }, phoneNumber: { type: String },
      city: { type: String },
      email: { type: String },
      district: { type: String },
      address: { type: String },
    }
  })
  peopleRecieve: {
    fullName: String,
    phoneNumber: String,
    city: String,
    district: String,
    email: String,
    address: String
  }

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  createdBy: User

  @Prop()
  code: String

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderProduct' }] })
  orderProducts: OrderProduct[]

  @Prop({
    type: {
      year: { type: String }, month: { type: String },
      day: { type: String },
      hour: { type: String }
    }
  })
  time: {
    year: String,
    month: String,
    day: String,
    hour: String
  }

  @Prop({
    type: {
      titleSend: { type: String }, occasion: { type: String },
      noteSendToPersonReceive: { type: String },
      noteSendToPersonAdmin: { type: String }
    }
  })
  message: {
    titleSend: String,
    occasion: String,
    noteSendToPersonReceive: String,
    noteSendToPersonAdmin: String
  }

  @Prop()
  totalPrice: Number

  @Prop({ default: "Pending" })
  status: String

  @Prop({ default: new Date() })
  createdAt: Date;
}


export const OrderSchema = SchemaFactory.createForClass(Order);
