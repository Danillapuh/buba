import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserRole } from 'src/user/entities/role.entity';
import { UserProfile } from 'src/user/entities/user-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRole, UserProfile])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
