import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { TestDocument } from './schemas/test.schemas';

@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>
  ) { }

  async find() {
    return this.testModel.find();
  }

  async create(title, content) {
    let test = new this.testModel({ title, content: content });
    return test.save();
  }

  async edit(testId, title, content) {
    let test = await this.testModel.findById(testId);
    test.content = content;
    test.title = title;
    return test.save();
  }

  async delete(tagId) {
    let test = await this.testModel.findById(tagId);
    return test.remove();
  }
}
