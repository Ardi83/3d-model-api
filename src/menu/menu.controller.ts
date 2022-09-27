import { Body, Controller, Get, Post, Delete, Param, Put, UseGuards, Request } from '@nestjs/common';
import { CreateMenuDto, Menu } from './menu.dto';
import { MenuService } from './menu.service';

@Controller('/menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Post('/createMenu')
  public async createMenu(@Body() createMenuDto: CreateMenuDto): Promise<Menu> {
    return this.menuService.createMenu(createMenuDto);
  }
}
