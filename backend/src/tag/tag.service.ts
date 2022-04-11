import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag, TagDocument } from './schemas/tag.schemas';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag.name) private tagModel: Model<TagDocument>
  ) { }

  async findByCategory(categoryId) {
    return this.tagModel.find({ category: categoryId }).populate("category","title","Category") ;
  }

  async create(categoryId, title) {
    let tag = new this.tagModel({ title, category: categoryId });
    return tag.save();
  }

  async edit(tagId, categoryId, title) {
    let tag = await this.tagModel.findById(tagId);
    tag.category = categoryId;
    tag.title = title;
    return tag.save();
  }

  async delete(tagId) {
    let tag = await this.tagModel.findById(tagId);
    return tag.remove();
  }

}
