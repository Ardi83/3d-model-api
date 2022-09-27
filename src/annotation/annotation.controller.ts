import { Body, Controller, Get, Post, Delete, Param, Put, UseGuards, Request } from '@nestjs/common';
import { CreateAnnotationDto, Annotation } from './annotation.dto';
import { AnnotationService } from './annotation.service';

@Controller('/annotation')
export class AnnotationController {
  constructor(private annotationService: AnnotationService) {}

  @Post('/createAnnotation')
  public async createAnnotation(@Body() createAnnotationDto: CreateAnnotationDto): Promise<Annotation> {
    return this.annotationService.createAnnotation(createAnnotationDto);
  }
}
