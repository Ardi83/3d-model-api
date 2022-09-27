import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubMenuDocument } from './sub-menu.schema';
import { CreateSubMenuDto, SubMenu } from './sub-menu.dto';

@Injectable()
export class SubMenuService {
  constructor(@InjectModel('SubMenu') private subMenuModel: Model<SubMenuDocument>) {}

  public async createSubMenu(createSubModelDto: CreateSubMenuDto): Promise<SubMenu> {
    const createdSubMenu = new this.subMenuModel({ ...createSubModelDto });
    await createdSubMenu.save();
    return createdSubMenu;
  }
}
