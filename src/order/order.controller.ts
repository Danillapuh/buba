import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import { GetUser } from 'src/getuser/getuser.decorator';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { InfoUser } from 'src/auth/types/user.type';
import { Roles } from 'src/roles/roles.decorator';
import { ShiftIdDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/add')
  @Roles(2)
  create(@GetUser() user: InfoUser) {
    return this.orderService.create(user);
  }

  @Post('/status')
  @Roles(2,3)
  findAll(@Body('id', ParseIntPipe) id: number, @Body('statusId', ParseIntPipe) status: number, @GetUser() user: InfoUser) {
    return this.orderService.updateStatus(id, status, user)
  }
  @Post('/addDish')
  @Roles(2)
  findOnea(@Body() dishInfo: UpdateOrderDto, @GetUser() user: InfoUser) {
    return this.orderService.addDish(dishInfo, user)
}

  @Get('/dishes/:page')
  findOne(@Param('page', ParseIntPipe) page: number, @GetUser() user: InfoUser, @Query() shift: ShiftIdDto) {
    return this.orderService.findMany(page, user, shift.shiftId)
  }

  @Get('/allDishes')
  sdfdse() {
    return this.orderService.getDishes()
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return ''
  }


}


