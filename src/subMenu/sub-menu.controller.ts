import { Body, Controller, Get, Post, Delete, Param, Put, UseGuards, Request } from '@nestjs/common';
import { CreateSubMenuDto, SubMenu } from './sub-menu.dto';
import { SubMenuService } from './sub-menu.service';

@Controller('/sub-menu')
export class SubMenuController {
  constructor(private subMenuService: SubMenuService) {}

  @Post('/createSubMenu')
  public async createSubMenu(@Body() createSubMenuDto: CreateSubMenuDto): Promise<SubMenu> {
    return this.subMenuService.createSubMenu(createSubMenuDto);
  }
}
