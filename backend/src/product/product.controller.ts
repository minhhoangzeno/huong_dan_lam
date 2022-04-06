import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Get('/:productId')
  async getProduct(@Param('productId') productId) {
    return this.productService.findByCategory(productId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        cb(null, `${randomName}${(file.originalname)}`)
      }
    })
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: ProductDto) {
    return this.productService.create(body, file.filename)
  }

  @UseGuards(JwtAuthGuard)
    @Post('edit/:id')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${(file.originalname)}`)
            }
        })
    }))
    async updateBlog(@UploadedFile() file: Express.Multer.File, @Body() body, @Param('id') id) {
        if (file) {
            return this.productService.edit(id, body, file.filename)
        } else {
            return this.productService.edit(id, body)
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async removeBlog(@Param('id') id) {
        return this.productService.delete(id)
    }

}
