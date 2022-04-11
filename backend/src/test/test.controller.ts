import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) { }


  @Get('')
  async findByCategory() {
    return this.testService.find()
  }

  @Post('create')
  async create(@Body() body) {
    return this.testService.create(body.title, body.content)
  }

  @Post('edit/:testId')
  async edit(@Param('testId') tagId, @Body() body) {
    return this.testService.edit(tagId, body.title, body.content)
  }

  @Delete('remove/:testId')
  async remove(@Param('testId') tagId) {
    return this.testService.delete(tagId)
  }
}
