import { Controller, Post, SkipThrottle, Throttle } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @SkipThrottle()
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @Post('login')
  login() {
    return { ok: true };
  }
}
