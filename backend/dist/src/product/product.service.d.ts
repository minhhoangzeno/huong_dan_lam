import { Model } from 'mongoose';
import { CategoryDocument } from 'src/category/schemas/category.schemas';
import { ProductDto } from './dto/product.dto';
import { Product, ProductDocument } from './schemas/product.schemas';
export declare class ProductService {
    private productModel;
    private categoryModel;
    constructor(productModel: Model<ProductDocument>, categoryModel: Model<CategoryDocument>);
    findAll(): Promise<Product[]>;
    create(productDto: ProductDto, photoURL: string): Promise<Product>;
}
