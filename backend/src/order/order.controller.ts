import { Body, Controller, Get, Post, UseGuards, Request, Param, Delete } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) { }

  @Get()
  async findAll() {
    return this.orderService.findAll();
  }


  @Get('amount/:year')
  async getOrderByAmount(@Param('year') year) {
      return this.orderService.findOrderByAmount(year);
  }


  @Get('revenue/:year')
  async getOrderByRevenue(@Param('year') year) {
      return this.orderService.findOrderByRevenue(year);
  }


  @UseGuards(JwtAuthGuard)
  @Post('search')
  async searchOrder(@Body() body) {
    return this.orderService.search(body.textSearch);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  async findByUser(@Request() req) {
    return this.orderService.findByUser(req.user._doc._id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() body, @Request() req) {
    return this.orderService.create(body.orderDto, body.orderProductDto, req.user._doc._id)
  }

  @UseGuards(JwtAuthGuard)
  @Post('edit/status/:orderId')
  async edit(@Param('orderId') orderId, @Body() body) {
    return this.orderService.editStatus(orderId, body.status)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:orderId')
  async delete(@Param('orderId') orderId) {
    return this.orderService.delete(orderId)
  }
}
