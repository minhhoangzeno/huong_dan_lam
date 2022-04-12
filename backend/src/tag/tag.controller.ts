import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private tagService: TagService) { }


  @Get(':categoryId')
  async findByCategory(@Param('categoryId') categoryId) {
    return this.tagService.findByCategory(categoryId)
  }

  @Post('create')
  async create(@Body() body) {
    return this.tagService.create(body.category, body.title)
  }

  @Post('edit/:tagId')
  async edit(@Param('tagId') tagId, @Body() body) {
    return this.tagService.edit(tagId, body.category, body.title)
  }

  @Delete('delete/:tagId')
  async remove(@Param('tagId') tagId) {
    return this.tagService.delete(tagId)
  }

}
