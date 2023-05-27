import { Injectable } from '@nestjs/common';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderDishes } from './entities/order-dishes.entity';
import { DishItem } from './entities/dish-item.entity';
import { ShiftService } from 'src/shift/shift.service';
import { InfoUser } from 'src/auth/types/user.type';
import { OrderStatus } from './entities/order-status.entity';
import { pages } from 'src/pages/pages';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(User) private User: Repository<User>,
    @InjectRepository(Order) private Order: Repository<Order>,
    @InjectRepository(OrderDishes) private OrderDishes: Repository<OrderDishes>,
    @InjectRepository(DishItem) private DishItem: Repository<DishItem>,
    @InjectRepository(OrderStatus) private OrderStatus: Repository<OrderStatus>,
    private shift: ShiftService
  ){}
 async create(userInfo: InfoUser) {
    let currentShift = await this.shift.getCurrentShift()
    if(!currentShift){
      return 'err 1'
    }
    console.log(currentShift)
    let user = await this.User.findOne({where: {id: userInfo.id, shifts: [currentShift]}})
    console.log(user)
    if(!user){
      return 'err'
    }
    let order = new Order()
    order.status = await this.OrderStatus.findOne({where:{id:1}})
    order.addedBy = user
    order.shift = currentShift
    await this.Order.manager.save(order)
    return 'ok'
  }

  findAll() {
    return `This action returns all order`;
  }
  async addDish(dishInfo: UpdateOrderDto, user: InfoUser){
    let userInfo = await this.User.findOne({where:{id: user.id}})
    let order = await this.Order.findOne({where:{id: dishInfo.orderId}})
    let dish = await this.DishItem.findOne({where:{id: dishInfo.dishId}})
    if(order && userInfo && dish && user.role == 2){
      let newDish = new OrderDishes()
      newDish.amount = dishInfo.amount
      newDish.dish = dish
      newDish.order = order
      return await this.OrderDishes.manager.save(newDish)
    }
    return 'err'
  }

  async findOne(id: number) {
   let order = await this.Order.createQueryBuilder('order')
   .leftJoinAndSelect('order.addedBy', 'user')
   .leftJoinAndSelect('order.cookedBy', 'cooker')
   .leftJoinAndSelect('order.status', 'status')
   .leftJoinAndSelect('order.dishes', 'dishes')
   .leftJoinAndSelect('dishes.dish', 'onedish')
   .leftJoinAndSelect('order.shift', 'shift')
   .where('order.id = :id', {id})
   .getOne()
   return order
  }

  async getDishes(){
    return await this.DishItem.find()
  }

  async findMany(page: number, user: InfoUser, shiftId: number) {
    let currentShift = await this.shift.getCurrentShift()
    if(user.role == 3){
      return await pages(this.Order.createQueryBuilder('order')
    .leftJoinAndSelect('order.addedBy', 'user')
    .leftJoinAndSelect('order.cookedBy', 'cooker')
    .leftJoinAndSelect('order.status', 'status')
    .leftJoinAndSelect('order.dishes', 'dishes')
    .leftJoinAndSelect('dishes.dish', 'onedish')
    .leftJoinAndSelect('order.shift', 'shift')
    .where('shift.id = :id', {id: shiftId || currentShift.id})
    .andWhere('status.id <= 3')
    .orderBy('status.id'),page,10)
    }
    return await pages(this.Order.createQueryBuilder('order')
    .leftJoinAndSelect('order.addedBy', 'user')
    .leftJoinAndSelect('order.cookedBy', 'cooker')
    .leftJoinAndSelect('order.status', 'status')
    .leftJoinAndSelect('order.dishes', 'dishes')
    .leftJoinAndSelect('dishes.dish', 'onedish')
    .leftJoinAndSelect('order.shift', 'shift')
    .where('shift.id = :id', {id: shiftId || currentShift.id})
    .orderBy('status.id'),page,10)
   }

  async updateStatus(id: number, statusId: number, userInfo: InfoUser) {
    let user = await this.User.findOne({where:{id: userInfo.id}}) 
    let order = await this.Order.findOne({where:{id}})
    console.log('AAAAA ', user, order)
    if(!user || !order) return 'err'

    if(userInfo.role == 3 && (statusId == 2 || statusId == 3)){
      order.status = await this.OrderStatus.findOne({where:{id:statusId}}) 
      order.cookedBy = user
      await this.Order.manager.save(order)
      return 'oke'
    }
    if(userInfo.role == 2 && (statusId != 2 && statusId != 3))
   {
    order.status = await this.OrderStatus.findOne({where:{id:statusId}})
    await this.Order.manager.save(order)
    return 'ok'
   }
   return 'err'

  }

  
}
