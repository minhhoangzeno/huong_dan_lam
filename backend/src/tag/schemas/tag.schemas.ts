import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Category } from 'src/category/schemas/category.schemas';

export type TagDocument = Tag & Document;

@Schema()
export class Tag {
  @Prop()
  id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({default: new Date()})
  createdAt: Date;
}

export const TagSchema = SchemaFactory.createForClass(Tag);