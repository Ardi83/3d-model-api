// import { TermService } from './term.service';
// import { TermController } from './term.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MaterialController } from './material.controller';
import { MaterialSchema } from './material.schema';
import { MaterialService } from './material.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Material', schema: MaterialSchema }])],
  controllers: [MaterialController],
  providers: [MaterialService]
})
export class MaterialModule {}
