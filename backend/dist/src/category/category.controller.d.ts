import { CategoryService } from './category.service';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    findAll(): unknown;
    create(body: any): unknown;
    update(body: any, id: any): unknown;
    delete(id: any): unknown;
}
