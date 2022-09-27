import { Prop, Schema } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
export class SubMenu {
  _id: string;

  @Prop({
    type: Date,
    required: false,
    default: Date.now
  })
  createdDate: Date;

  @Prop({
    type: String,
    required: true
  })
  name: string;

  @Prop({
    type: Boolean,
    required: false,
    default: false
  })
  active?: string;
}

export class CreateSubMenuDto {
  name: string;
}
