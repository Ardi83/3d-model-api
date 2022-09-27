import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnimationDocument } from './animation.schema';
import { CreateAnimationDto, Animation } from './animation.dto';

@Injectable()
export class AnimationService {
  constructor(@InjectModel('Animation') private animationModel: Model<AnimationDocument>) {}

  public async createAnimation(createAnimationDto: CreateAnimationDto): Promise<Animation> {
    const createdAnimation = new this.animationModel({ ...createAnimationDto });
    await createdAnimation.save();
    return createdAnimation;
  }
}
