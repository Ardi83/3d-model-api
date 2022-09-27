import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MenuDocument } from './menu.schema';
import { CreateMenuDto, Menu } from './menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectModel('Menu') private menuModel: Model<MenuDocument>) {}

  public async createMenu(createModelDto: CreateMenuDto): Promise<Menu> {
    const createdMenu = new this.menuModel({ ...createModelDto });
    await createdMenu.save();
    return createdMenu;
  }
}
