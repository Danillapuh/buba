import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { In, Repository } from 'typeorm';
import { WorkShift } from './entities/shift.entity';
import { ShiftStatus } from './entities/shift-status.entity';
import { Cron } from '@nestjs/schedule/dist';
import { ShiftService } from './shift.service';

@Injectable()
export class ShiftCronService {
  constructor(
    @InjectRepository(User) private User: Repository<User>,
    @InjectRepository(WorkShift) private WorkShift: Repository<WorkShift>,
    @InjectRepository(ShiftStatus) private ShiftStatus: Repository<ShiftStatus>,
    private ShiftService: ShiftService
  ){}
    
  @Cron('10 * * * * *')
  async handleCron() {
    console.log('shifts updating....')
    let now = new Date()
    let shiftsToCancel = await this.WorkShift.createQueryBuilder('shift')
    .leftJoinAndSelect('shift.status', 'status')
    .where('shift.dateEnd <= :now', {now})
    .getMany()

    if(shiftsToCancel.length){
        let status = await this.ShiftStatus.findOne({where:{id:3}})
        shiftsToCancel.forEach(shift=>{
            shift.status = status
        })
        await this.WorkShift.manager.save(shiftsToCancel)
    }

    let currentShift = await this.ShiftService.getCurrentShift()
    if(currentShift){
        currentShift.status = currentShift.status.id == 2 ? currentShift.status : await this.ShiftStatus.findOne({where:{id:2}})
        await this.WorkShift.manager.save(currentShift)
    }
    console.log('shifts updated')
  }
}

