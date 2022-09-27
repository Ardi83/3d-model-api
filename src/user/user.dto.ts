import { Prop, Schema } from '@nestjs/mongoose';
import { UserRole } from '../models/shared.model.dto';

@Schema()
export class User {
  _id: string;

  @Prop({
    type: String,
    required: false,
    default: UserRole.Manager
  })
  role: UserRole;

  @Prop({
    type: String,
    required: true
  })
  email: string;

  @Prop({
    type: String,
    required: true
  })
  password: string;

  @Prop({
    type: String,
    required: false
  })
  resetPasswordToken?: string;

  @Prop({
    type: Boolean,
    required: false,
    default: false
  })
  accountActivated?: boolean;

  @Prop({
    type: Date,
    required: false,
    default: Date.now
  })
  registerDate: Date;
}

export class CreateUserDto {
  role?: UserRole;

  email: string;

  password: string;
}

export class UpdateUserDto {
  role?: UserRole;
}

export class UpdateUserEmailDto {
  newEmail: string;
}

export class UpdateUserPasswordDto {
  newPassword: string;
}

export class UserLoginDto {
  email: string;
  password: string;
}

export class UserLoginResponse {
  accessToken: string;
}

export class ResendUserActivationLinkDto {
  email: string;
}

export class UserMessageResponse {
  messagePath: string;
}

export class ResetUserPasswordDto {
  email: string;
}
