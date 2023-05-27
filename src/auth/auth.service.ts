import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserProfile } from 'src/user/entities/user-profile.entity';
import { UserRole } from 'src/user/entities/role.entity';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';

@Injectable()
export class AuthService {
    constructor(
        private Jwt: JwtService,
        @InjectRepository(User) private User: Repository<User>,
        @InjectRepository(UserProfile) private UserProfile: Repository<UserProfile>,
        @InjectRepository(UserRole) private UserRole: Repository<UserRole>,
    ){}

    async login(login: string, password: string){
        console.log(login, password)
        let userProfile = await this.UserProfile.findOne({relations:{user: true ,role: true},where:{login}})
        if(userProfile){
            if(await compare(password, userProfile.password)){
                let token = this.Jwt.sign({id: userProfile.user.id, role: userProfile.role.id, name: userProfile.user.name})
                let user = await this.User.findOne({relations: {role: true},where:{id: userProfile.user.id}})
                return {token, user}
            }
        }
        
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
    }
}
