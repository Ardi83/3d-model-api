import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Animation } from './animation.dto';

export type AnimationDocument = Animation & Document;

export const AnimationSchema = SchemaFactory.createForClass(Animation);
