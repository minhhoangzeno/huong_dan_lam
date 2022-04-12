import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/category/schemas/category.schemas';
import { Product, ProductDocument } from './schemas/product.schemas';
var mongoose = require('mongoose');
@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
  ) { }
  async findByCategory(categoryId) {
    return this.productModel.find({ category: categoryId }).populate("category", "title", "Category").populate("tag", "title", "Tag").limit(10)
  }


  async findById(productId) {
    return this.productModel.findById(productId);
  }

  async findByTag(tagId) {
    return this.productModel.find({ tag: tagId }).populate("category", "title", "Category").populate("tag", "title", "Tag")
  }

  async findByCreateDate() {
    return this.productModel.find().sort({ createdAt: -1 }).limit(6).populate("tag", "title", "Tag").populate("category", "title", "Category") ;
  }

  async create(productDto, photoURL: string) {
    let product = new this.productModel();
    product.title = productDto.title;
    product.tag = productDto.tag;
    product.category = productDto.category;
    product.price = productDto.price;
    product.content = productDto.content;
    product.warn = productDto.warn;
    product.animate = productDto.animate;
    product.photoURL = photoURL;
    return product.save();
  }
  async edit(productId, productDto, photoURL?: string) {
    let product = await this.productModel.findById(productId);
    if (photoURL) {
      product.title = productDto.title;
      product.category = productDto.category;
      product.tag = productDto.tag;
      product.price = productDto.price;
      product.content = productDto.content;
      product.warn = productDto.warn;
      product.animate = productDto.animate;
      product.photoURL = photoURL;
    } else {
      product.tag = productDto.tag;
      product.title = productDto.title;
      product.category = productDto.category;
      product.price = productDto.price;
      product.content = productDto.content;
      product.warn = productDto.warn;
      product.animate = productDto.animate;
    }
    return product.save();
  }
  async delete(productId) {
    let product = await this.productModel.findById(productId);
    return product.remove();
  }
}
