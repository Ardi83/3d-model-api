// import { TermService } from './term.service';
// import { TermController } from './term.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SketchfabController } from './sketchfab.controller';
import { SketchfabSchema } from './sketchfab.schema';
import { SketchfabService } from './sketchfab.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Sketchfab', schema: SketchfabSchema }])],
  controllers: [SketchfabController],
  providers: [SketchfabService]
})
export class SketchfabModule {}
