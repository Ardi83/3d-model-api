import { Body, Controller, Get, Post, Delete, Param, Put, UseGuards, Request } from '@nestjs/common';
import { CreateMaterialDto, Material } from './material.dto';
import { MaterialService } from './material.service';

@Controller('/material')
export class MaterialController {
  constructor(private materialService: MaterialService) {}

  @Post('/createMaterial')
  public async createMaterial(@Body() createMaterialDto: CreateMaterialDto): Promise<Material> {
    return this.materialService.createMaterial(createMaterialDto);
  }
}
