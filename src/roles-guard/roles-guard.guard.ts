import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { ShiftService } from 'src/shift/shift.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesGuardGuard implements CanActivate {
  constructor(
    private JWT: JwtService,
    private reflector: Reflector,
    private shiftService: ShiftService,
  ){}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())
   if(!roles){
    return true
   }
   let request = context.switchToHttp().getRequest()
   try{
    let token = request.headers.authorization.split(' ')[1]
    let user = this.JWT.verify(token)
    if(!(await this.shiftService.CurrentShiftshifthasUser(user.id))) return false
    
    if(roles.indexOf(user.role) == -1){return false}
   }
   catch{
    return false
   }
   return true
  }
}
