import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from 'src/user/entities/role.entity';
import { User } from 'src/user/entities/user.entity';
import { UserProfile } from 'src/user/entities/user-profile.entity';
import { WorkShift } from 'src/shift/entities/shift.entity';
import { DishItem } from './entities/dish-item.entity';
import { Order } from './entities/order.entity';
import { ShiftStatus } from 'src/shift/entities/shift-status.entity';
import { OrderDishes } from './entities/order-dishes.entity';
import { ShiftModule } from 'src/shift/shift.module';
import { OrderStatus } from './entities/order-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole, User, UserProfile, WorkShift, DishItem, Order, ShiftStatus, OrderDishes, OrderStatus]), ShiftModule],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
