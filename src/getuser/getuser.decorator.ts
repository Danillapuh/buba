import { createParamDecorator, ExecutionContext } from '@nestjs/common';


export const GetUser = createParamDecorator(
    (Isuser: boolean, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      const user = request.user
      if (user) return user;
  
      return undefined
    },
  );