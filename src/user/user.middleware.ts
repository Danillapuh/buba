import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(
    private JWT: JwtService
  ){}
  use(request: any, res: any, next: () => void) {
    try{
      let token = request.headers.authorization.split(' ')[1]
      console.log('token is', token)
      let user = this.JWT.verify(token)
      console.log("USER IS ",user)
      request.user = user
      

     }
     catch{
      
     }
    next();
  }
}
