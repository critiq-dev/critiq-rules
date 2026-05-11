import { Controller, Post, SkipThrottle } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @SkipThrottle()
  @Post('login')
  login() {
    return { ok: true };
  }
}
