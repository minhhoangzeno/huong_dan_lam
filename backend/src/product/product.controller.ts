import { Body, Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    async findAll() {
        return this.productService.findAll();
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
    async create(@UploadedFile() file: Express.Multer.File, @Body() body: ProductDto) {
        return this.productService.create(body, file.filename)
    }
}
