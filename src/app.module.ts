import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuardGuard } from './roles-guard/roles-guard.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from './user/entities/role.entity';
import { User } from './user/entities/user.entity';
import { UserProfile } from './user/entities/user-profile.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { ShiftModule } from './shift/shift.module';
import { OrderModule } from './order/order.module';
import { WorkShift } from './shift/entities/shift.entity';
import { DishItem } from './order/entities/dish-item.entity';
import { Order } from './order/entities/order.entity';
import { ShiftStatus } from './shift/entities/shift-status.entity';
import { OrderDishes } from './order/entities/order-dishes.entity';
import { NestModule } from '@nestjs/common';
import { UserMiddleware } from './user/user.middleware';
import { OrderStatus } from './order/entities/order-status.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { EmitsModule } from './emits/emits.module';

@Module({
  imports: [ScheduleModule.forRoot(),UserModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'restoran',
    entities: [UserRole, User, UserProfile, WorkShift, DishItem, Order, ShiftStatus, OrderDishes, OrderStatus],
    synchronize: true,
  }), JwtModule.register({
    global: true,
    secret: '23fsgsgsdgnroHUSYGSIDfsdg856834jdffgnjodfgodfg',
    signOptions:{expiresIn: '30d'}
  }), AuthModule, ShiftModule, OrderModule, EmitsModule],
  controllers: [AppController],
  providers: [AppService, {provide: APP_GUARD, useClass: RolesGuardGuard}],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware)
    .forRoutes('order', 'shift')
  }
}
