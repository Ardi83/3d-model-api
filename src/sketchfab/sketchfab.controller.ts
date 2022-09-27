import { Body, Controller, Get, Post, Delete, Param, Put, UseGuards, Request } from '@nestjs/common';
import { Create3DModelDto, Sketchfab } from './sketchfab.dto';
import { SketchfabService } from './sketchfab.service';

@Controller('/sketchfab')
export class SketchfabController {
  constructor(private sketchfabService: SketchfabService) {}

  @Post('/createModel')
  public async createTag(@Body() create3DModelDto: Create3DModelDto): Promise<Sketchfab> {
    return this.sketchfabService.createSketchfab(create3DModelDto);
  }
}
