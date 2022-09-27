import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Menu } from './menu.dto';

export type MenuDocument = Menu & Document;

export const MenuSchema = SchemaFactory.createForClass(Menu);
