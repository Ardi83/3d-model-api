import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MenuDocument } from './menu.schema';
import { CreateMenuDto, Menu } from './menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectModel('Menu') private menuModel: Model<MenuDocument>) {}

  public async createMenu(createMenuDto: CreateMenuDto): Promise<Menu> {
    const createdMenu = new this.menuModel({ ...createMenuDto });
    await createdMenu.save();
    return createdMenu;
  }
}
