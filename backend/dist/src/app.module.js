"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const blog_module_1 = require("./blog/blog.module");
const comment_module_1 = require("./comment/comment.module");
const user_module_1 = require("./user/user.module");
const feedback_module_1 = require("./feedback/feedback.module");
const category_module_1 = require("./category/category.module");
const product_module_1 = require("./product/product.module");
const order_module_1 = require("./order/order.module");
const order_product_module_1 = require("./order-product/order-product.module");
const tag_module_1 = require("./tag/tag.module");
const test_module_1 = require("./test/test.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule,
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/anhtuyet'),
            auth_module_1.AuthModule,
            blog_module_1.BlogModule,
            comment_module_1.CommentModule,
            feedback_module_1.FeedbackModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            order_module_1.OrderModule,
            order_product_module_1.OrderProductModule,
            tag_module_1.TagModule,
            test_module_1.TestModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map