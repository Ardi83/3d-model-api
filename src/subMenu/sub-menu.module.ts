// import { TermService } from './term.service';
// import { TermController } from './term.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubMenuController } from './sub-menu.controller';
import { SubMenuSchema } from './sub-menu.schema';
import { SubMenuService } from './sub-menu.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'SubMenu', schema: SubMenuSchema }])],
  controllers: [SubMenuController],
  providers: [SubMenuService]
})
export class SubMenuModule {}
