import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from './shared.module';
import { SketchfabModule } from './sketchfab/sketchfab.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      //   useFindAndModify: false,
      //   useCreateIndex: true
    }),
    SharedModule,
    SketchfabModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
