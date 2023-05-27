import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserProfile } from './entities/user-profile.entity';
import { UserRole } from './entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserProfile, UserRole])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
