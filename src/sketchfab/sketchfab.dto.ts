import { Prop, Schema } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Sketchfab {
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

  @Prop({
    type: String,
    required: true
  })
  model_uid: string;
}

export class create3DModel {
  name: string;
  model_uid: string;
}
