// import { TermService } from './term.service';
// import { TermController } from './term.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnnotationController } from './annotation.controller';
import { AnnotationSchema } from './annotation.schema';
import { AnnotationService } from './annotation.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Annotation', schema: AnnotationSchema }])],
  controllers: [AnnotationController],
  providers: [AnnotationService]
})
export class AnnotationModule {}
