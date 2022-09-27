import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SubMenu } from './sub-menu.dto';

export type SubMenuDocument = SubMenu & Document;

export const SubMenuSchema = SchemaFactory.createForClass(SubMenu);
