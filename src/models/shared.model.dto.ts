export class CustomHttpExceptionDto {
  message: string;
}

export class CustomHttpExceptionResponse {
  statusCode: number;
  message: string;
}

export class AccessToken {
  userId: string;
  email: string;
  active: boolean;
  userRole: UserRole;
  iat?: number;
  exp?: number;
}

export enum UserRole {
  Admin = 'admin',
  Manager = 'manager'
}

export class ResetPasswordToken {
  userEmail: string;
  resetPasswordTokenExpireAt: number;
  iat?: number;
  exp?: number;
}

export type ControllerCustomRequest = Request & {
  user: AccessToken;
  connection?: any;
  socket?: any;
};
