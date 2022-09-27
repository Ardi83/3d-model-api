import { ControllerCustomRequest } from './../models/shared.model.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SketchfabDocument } from './sketchfab.schema';
import { create3DModel, Sketchfab } from './sketchfab.dto';

@Injectable()
export class SketchfabService {
  constructor(@InjectModel('Sketchfab') private sketchfabModel: Model<SketchfabDocument>) {}

  public async createSketchfab(create3DModel: create3DModel): Promise<Sketchfab> {
    const createdSketchfab = new this.sketchfabModel({ ...create3DModel });
    await createdSketchfab.save();
    return createdSketchfab;
  }
}
