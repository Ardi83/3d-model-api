// import { TermService } from './term.service';
// import { TermController } from './term.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimationController } from './animation.controller';
import { AnimationSchema } from './animation.schema';
import { AnimationService } from './animation.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Animation', schema: AnimationSchema }])],
  controllers: [AnimationController],
  providers: [AnimationService]
})
export class AnimationModule {}
