import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Add global prefix
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Enable CORS
  app.use((req, res, next) => {
    const allowedOrigins = process.env.ALLOWED_ORIGINS.split(';');
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

  await app.listen(process.env.SERVER_PORT, '0.0.0.0', () => {
    console.log('Running at server environment:' + JSON.stringify(process.env.NODE_ENV));
    console.log('Listening at http://localhost:' + process.env.SERVER_PORT + '/' + globalPrefix);
  });
}
bootstrap();
