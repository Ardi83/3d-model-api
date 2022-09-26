import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { unauthorizedException, userNotLoggedException } from '../helpers/httpExceptions.helper';
import { UserRole } from '../models/shared.model.dto';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user) {
    if (err || !user) {
      throw (
        err ||
        unauthorizedException({
          message: 'token is not valid!'
        })
      );
    }
    return user;
  }
}

export class UserAdminGuard extends AuthGuard('jwt') {
  handleRequest(err, user) {
    if (err || !user || user.userRole !== UserRole.Admin) {
      throw err || user
        ? unauthorizedException({
            message: 'you are not admin!'
          })
        : userNotLoggedException();
    }
    return user;
  }
}

export class UserAdminOrManagerGuard extends AuthGuard('jwt') {
  handleRequest(err, user) {
    if (err || !user || !(user.userRole === UserRole.Admin || user.userRole === UserRole.Manager)) {
      throw err || user
        ? unauthorizedException({
            message: 'you are not admin or manager!'
          })
        : userNotLoggedException();
    }
    return user;
  }
}
