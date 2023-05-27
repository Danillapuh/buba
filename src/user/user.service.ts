import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserProfile } from './entities/user-profile.entity';
import { UserRole } from './entities/role.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private User: Repository<User>,
    @InjectRepository(UserProfile) private UserProfile: Repository<UserProfile>,
    @InjectRepository(UserRole) private UserRole: Repository<UserRole>,
  ){}

  async create(createUserDto: CreateUserDto) {
    let role = await this.UserRole.findOne({where:{id:createUserDto.role}});
    let newUser = new User();
    newUser.role = role
    let profile = new  UserProfile()
    profile.login = createUserDto.login
    profile.password = await hash(createUserDto.password, 6)
    profile.role = role
    newUser.name = createUserDto.name
    newUser.photo_url = createUserDto.imageUrl || 'https://t3.ftcdn.net/jpg/05/70/71/06/360_F_570710660_Jana1ujcJyQTiT2rIzvfmyXzXamVcby8.jpg'
    newUser.profile = profile
    await this.User.manager.save(newUser)
  }
  

  async findAll() {
    return await this.User.find({relations:{role:true}})
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
