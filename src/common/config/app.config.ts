import { registerAs } from '@nestjs/config';

export default registerAs('APP_CONFIG', () => {
  return {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT, 10) || 3300,
  };
});