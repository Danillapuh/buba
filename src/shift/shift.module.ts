import { Module } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { ShiftController } from './shift.controller';
import { WorkShift } from './entities/shift.entity';
import { ShiftStatus } from './entities/shift-status.entity';
import { Order } from 'src/order/entities/order.entity';
import { DishItem } from 'src/order/entities/dish-item.entity';
import { User } from 'src/user/entities/user.entity';
import { UserProfile } from 'src/user/entities/user-profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShiftCronService } from './shift-cron.service';


@Module({
  imports: [TypeOrmModule.forFeature([WorkShift, ShiftStatus, Order, DishItem, User, UserProfile])],
  controllers: [ShiftController],
  providers: [ShiftService, ShiftCronService],
  exports:[ShiftService]
})
export class ShiftModule {}
