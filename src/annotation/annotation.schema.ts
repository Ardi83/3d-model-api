import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Annotation } from './annotation.dto';

export type AnnotationDocument = Annotation & Document;

export const AnnotationSchema = SchemaFactory.createForClass(Annotation);
