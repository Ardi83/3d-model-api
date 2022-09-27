import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Material } from './material.dto';

export type MaterialDocument = Material & Document;

export const MaterialSchema = SchemaFactory.createForClass(Material);
