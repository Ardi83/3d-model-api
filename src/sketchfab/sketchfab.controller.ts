import { Body, Controller, Get, Post, Delete, Param, Put, UseGuards, Request } from '@nestjs/common';
import { create3DModel, Sketchfab } from './sketchfab.dto';
import { SketchfabService } from './sketchfab.service';

@Controller('/sketchfab')
export class SketchfabController {
  constructor(private sketchfabService: SketchfabService) {}

  @Post('/createModel')
  public async createTag(@Body() create3DModelDto: create3DModel): Promise<Sketchfab> {
    return this.sketchfabService.createSketchfab(create3DModelDto);
  }
}
