import { Body, Controller, Get, Post, Delete, Param, Put, UseGuards, Request } from '@nestjs/common';
import { CreateAnimationDto, Animation } from './animation.dto';
import { AnimationService } from './animation.service';

@Controller('/animation')
export class AnimationController {
  constructor(private menuService: AnimationService) {}

  @Post('/createAnimation')
  public async createAnimation(@Body() createAnimationDto: CreateAnimationDto): Promise<Animation> {
    return this.menuService.createAnimation(createAnimationDto);
  }
}
