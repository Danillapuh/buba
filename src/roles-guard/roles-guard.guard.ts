import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuardGuard implements CanActivate {
  constructor(
    private JWT: JwtService,
    private reflector: Reflector
  ){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())
   if(!roles){
    return true
   }
   let request = context.switchToHttp().getRequest()
   try{
    let token = request.headers.authorization.split(' ')[1]
    console.log(token)
    let user = this.JWT.verify(token)
    console.log(user)
    if(roles.indexOf(user.role) == -1){return false}
   }
   catch{
    return false
   }
   return true
  }
}
