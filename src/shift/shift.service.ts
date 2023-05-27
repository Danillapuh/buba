import { Injectable } from '@nestjs/common';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { In, Repository } from 'typeorm';
import { WorkShift } from './entities/shift.entity';
import { ShiftStatus } from './entities/shift-status.entity';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { InfoUser } from 'src/auth/types/user.type';
import { AdduserToShiftDto } from './dto/add-user-to-shift.dto';

@Injectable()
export class ShiftService {
  constructor(
    @InjectRepository(User) private User: Repository<User>,
    @InjectRepository(WorkShift) private WorkShift: Repository<WorkShift>,
    @InjectRepository(ShiftStatus) private ShiftStatus: Repository<ShiftStatus>,
  ){}
  async create(createShiftDto: CreateShiftDto) {
    let isShiftExist = await this.WorkShift.createQueryBuilder('shift')
    .where('shift.dateStart <= :datestart AND shift.dateEnd >= :datestart', {datestart: new Date(createShiftDto.dateStart)})
    .getOne()
   let users = await this.User.find({where: {id: In(createShiftDto.users)}})
   console.log('SHIFT USERS ',users)
   if(!users || isShiftExist || (new Date(createShiftDto.dateStart) > new Date(createShiftDto.dateEnd))){
    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST)
   }
   let shift = new WorkShift()
   shift.users = users
   shift.dateStart = createShiftDto.dateStart
   shift.dateEnd = createShiftDto.dateEnd
   shift.status = await this.ShiftStatus.findOne({where:{id:1}})
   return await this.WorkShift.manager.save(shift)
  }

  async getCurrentShift(){
    let now = new Date()
    console.log(now)
    let shift = await this.WorkShift.createQueryBuilder('shift')
    .leftJoinAndSelect('shift.users', 'users')
    .leftJoinAndSelect('shift.orders', 'orders')
    .leftJoinAndSelect('shift.status', 'status')
    .where('shift.dateStart <= :now', {now})
    .andWhere('shift.dateEnd >= :now', {now})
    .getOne()
    return shift
  }

  async findAll() {
    let shift = await this.WorkShift.createQueryBuilder('shift')
    .leftJoinAndSelect('shift.status', 'status')
    .getMany()
    return shift
  }

  async addUserToShift(usersInfo: AdduserToShiftDto, user: InfoUser){
    let shiftToAdd = await this.WorkShift.findOne({relations: {users: true},where:{id: usersInfo.shiftId}})
    let userstoAdd = await this.User.find({where:{id: In(usersInfo.users)}})
    let admin = await this.User.findOne({where:{id: user.id}})
    if(userstoAdd.length && admin && shiftToAdd){
      shiftToAdd.users = [...userstoAdd, ...shiftToAdd.users]
      await this.WorkShift.manager.save(shiftToAdd)
      return 'ok'
    }
    return 'err'
  }

  async deleteUserToShift(usersInfo: AdduserToShiftDto, user: InfoUser){
    let shiftToAdd = await this.WorkShift.findOne({relations: {users: true},where:{id: usersInfo.shiftId}})
    let admin = await this.User.findOne({where:{id: user.id}})
    if(admin && shiftToAdd){
      shiftToAdd.users = shiftToAdd.users.filter((userId)=>usersInfo.users.indexOf(userId.id) == -1)
      await this.WorkShift.manager.save(shiftToAdd)
      return 'ok'
    }
    return 'err'
  }

  async findOne(id: number) {
    return await this.WorkShift.findOne({relations:{status:true,users:true},where:{id}})
  }

  update(id: number, updateShiftDto: UpdateShiftDto) {
    return `This action updates a #${id} shift`;
  }

  remove(id: number) {
    return `This action removes a #${id} shift`;
  }
}
