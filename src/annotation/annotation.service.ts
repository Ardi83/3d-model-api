import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnnotationDocument } from './annotation.schema';
import { CreateAnnotationDto, Annotation } from './annotation.dto';

@Injectable()
export class AnnotationService {
  constructor(@InjectModel('Annotation') private annotationModel: Model<AnnotationDocument>) {}

  public async createAnnotation(createAnnotationDto: CreateAnnotationDto): Promise<Annotation> {
    const createdAnnotation = new this.annotationModel({ ...createAnnotationDto });
    await createdAnnotation.save();
    return createdAnnotation;
  }
}
