import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from './user.dto';
import * as bcrypt from 'bcryptjs';

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

// User schema helpers
UserSchema.pre<UserDocument>('save', function (next) {
  if (!this.isModified('password')) {
    next();
  } else {
    return new Promise((resolve: any, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) reject(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
          if (err) reject(err);
          this.password = hash;
          resolve(this.password);
          next();
        });
      });
    });
  }
});
