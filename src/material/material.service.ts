import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MaterialDocument } from './material.schema';
import { CreateMaterialDto, Material } from './material.dto';

@Injectable()
export class MaterialService {
  constructor(@InjectModel('Material') private materialModel: Model<MaterialDocument>) {}

  public async createMaterial(createMaterialDto: CreateMaterialDto): Promise<Material> {
    const createdMaterial = new this.materialModel({ ...createMaterialDto });
    await createdMaterial.save();
    return createdMaterial;
  }
}
