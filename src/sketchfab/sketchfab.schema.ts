import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Sketchfab } from './sketchfab.dto';

export type SketchfabDocument = Sketchfab & Document;

export const SketchfabSchema = SchemaFactory.createForClass(Sketchfab);
