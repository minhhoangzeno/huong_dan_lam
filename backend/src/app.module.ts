import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';
import { FeedbackModule } from './feedback/feedback.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderProductModule } from './order-product/order-product.module';


@Module({
  imports: [UserModule,
    MongooseModule.forRoot('mongodb://localhost/anhtuyet'),
    AuthModule,
    BlogModule,
    CommentModule,
    FeedbackModule,
    CategoryModule,
    ProductModule,
    OrderModule,
    OrderProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
