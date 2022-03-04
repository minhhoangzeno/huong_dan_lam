import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/category/schemas/category.schemas';
import { ProductDto } from './dto/product.dto';
import { Product, ProductDocument } from './schemas/product.schemas';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>,
        @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
    ) { }

    async findAll(): Promise<Product[]> {
        return this.productModel.find();
    }

    async create(productDto: ProductDto, photoURL: string): Promise<Product> {
        let product = new this.productModel({ ...productDto, photoURL });
        let category = await this.categoryModel.findById(product.category.toString());
        category.products.push(product._id);
        category.save();
        return product.save();
    }


}
