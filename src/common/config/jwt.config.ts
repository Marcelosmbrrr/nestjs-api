import { registerAs } from '@nestjs/config';

export default registerAs('TOKEN_JWT_CONFIG', () => {
  return {
    secret: process.env.JWT_SECRET,
    accessTokenTtl: process.env.JWT_ACCESS_TOKEN_TTL,
  };
});