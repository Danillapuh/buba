import { Controller, Get, Post, Body } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { GetUser } from 'src/getuser/getuser.decorator';
import { InfoUser } from 'src/auth/types/user.type';
import { Roles } from 'src/roles/roles.decorator';
import { AdduserToShiftDto } from './dto/add-user-to-shift.dto';
import { Param } from '@nestjs/common/decorators';

@Controller('shift')
export class ShiftController {
    constructor(
        private ShiftService: ShiftService
    ){}
    @Get('/current')
    f(){
        return this.ShiftService.getCurrentShift()
    }

    @Get('/all')
    g(){
        return this.ShiftService.findAll()
    }

    @Post('add')
    add(@Body() shift: CreateShiftDto){
        return this.ShiftService.create(shift)
    }
    @Post('addUsers')
    @Roles(1)
    adds(@Body() infousers: AdduserToShiftDto, @GetUser() user: InfoUser){
        return this.ShiftService.addUserToShift(infousers,user)
    }

    @Post('deleteUsers')
    @Roles(1)
    del(@Body() infousers: AdduserToShiftDto, @GetUser() user: InfoUser){
        return this.ShiftService.deleteUserToShift(infousers,user)
    }
    @Get(':id')
    srfsesf(@Param('id', ParseIntPipe) id: number){
        return this.ShiftService.findOne(id)
    }
}
