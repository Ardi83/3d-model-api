import {
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  ForbiddenException,
  NotAcceptableException,
  RequestTimeoutException,
  ConflictException,
  GoneException,
  HttpVersionNotSupportedException,
  PayloadTooLargeException,
  UnsupportedMediaTypeException,
  UnprocessableEntityException,
  InternalServerErrorException,
  NotImplementedException,
  MethodNotAllowedException,
  BadGatewayException,
  ServiceUnavailableException,
  GatewayTimeoutException,
  PreconditionFailedException,
  HttpStatus
} from '@nestjs/common';
import { CustomHttpExceptionDto, CustomHttpExceptionResponse } from '../models/shared.model.dto';

export const badRequestException = (data: CustomHttpExceptionDto) => {
  return new BadRequestException({
    statusCode: HttpStatus.BAD_REQUEST,
    ...data
  } as CustomHttpExceptionResponse);
};

export const unauthorizedException = (data: CustomHttpExceptionDto) => {
  return new UnauthorizedException({
    statusCode: HttpStatus.UNAUTHORIZED,
    ...data
  } as CustomHttpExceptionResponse);
};

export const notFoundException = (data: CustomHttpExceptionDto) => {
  return new NotFoundException({
    statusCode: HttpStatus.NOT_FOUND,
    ...data
  } as CustomHttpExceptionResponse);
};

export const forbiddenException = (data: CustomHttpExceptionDto) => {
  return new ForbiddenException({
    statusCode: HttpStatus.FORBIDDEN,
    ...data
  } as CustomHttpExceptionResponse);
};

export const notAcceptableException = (data: CustomHttpExceptionDto) => {
  return new NotAcceptableException({
    statusCode: HttpStatus.NOT_ACCEPTABLE,
    ...data
  } as CustomHttpExceptionResponse);
};
export const requestTimeoutException = (data: CustomHttpExceptionDto) => {
  return new RequestTimeoutException({
    statusCode: HttpStatus.REQUEST_TIMEOUT,
    ...data
  } as CustomHttpExceptionResponse);
};

export const conflictException = (data: CustomHttpExceptionDto) => {
  return new ConflictException({
    statusCode: HttpStatus.CONFLICT,
    ...data
  } as CustomHttpExceptionResponse);
};

export const goneException = (data: CustomHttpExceptionDto) => {
  return new GoneException({
    statusCode: HttpStatus.GONE,
    ...data
  } as CustomHttpExceptionResponse);
};

export const httpVersionNotSupportedException = (data: CustomHttpExceptionDto) => {
  return new HttpVersionNotSupportedException({
    statusCode: HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
    ...data
  } as CustomHttpExceptionResponse);
};

export const payloadTooLargeException = (data: CustomHttpExceptionDto) => {
  return new PayloadTooLargeException({
    statusCode: HttpStatus.PAYLOAD_TOO_LARGE,
    ...data
  } as CustomHttpExceptionResponse);
};

export const unsupportedMediaTypeException = (data: CustomHttpExceptionDto) => {
  return new UnsupportedMediaTypeException({
    statusCode: HttpStatus.UNSUPPORTED_MEDIA_TYPE,
    ...data
  } as CustomHttpExceptionResponse);
};

export const unprocessableEntityException = (data: CustomHttpExceptionDto) => {
  return new UnprocessableEntityException({
    statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    ...data
  } as CustomHttpExceptionResponse);
};

export const internalServerErrorException = (data: CustomHttpExceptionDto) => {
  return new InternalServerErrorException({
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    ...data
  } as CustomHttpExceptionResponse);
};

export const notImplementedException = (data: CustomHttpExceptionDto) => {
  return new NotImplementedException({
    statusCode: HttpStatus.NOT_IMPLEMENTED,
    ...data
  } as CustomHttpExceptionResponse);
};

export const methodNotAllowedException = (data: CustomHttpExceptionDto) => {
  return new MethodNotAllowedException({
    statusCode: HttpStatus.METHOD_NOT_ALLOWED,
    ...data
  } as CustomHttpExceptionResponse);
};

export const badGatewayException = (data: CustomHttpExceptionDto) => {
  return new BadGatewayException({
    statusCode: HttpStatus.BAD_GATEWAY,
    ...data
  } as CustomHttpExceptionResponse);
};

export const serviceUnavailableException = (data: CustomHttpExceptionDto) => {
  return new ServiceUnavailableException({
    statusCode: HttpStatus.SERVICE_UNAVAILABLE,
    ...data
  } as CustomHttpExceptionResponse);
};

export const gatewayTimeoutException = (data: CustomHttpExceptionDto) => {
  return new GatewayTimeoutException({
    statusCode: HttpStatus.GATEWAY_TIMEOUT,
    ...data
  } as CustomHttpExceptionResponse);
};

export const preconditionFailedException = (data: CustomHttpExceptionDto) => {
  return new PreconditionFailedException({
    statusCode: HttpStatus.PRECONDITION_FAILED,
    ...data
  } as CustomHttpExceptionResponse);
};

export const userNotLoggedException = () => {
  return new UnauthorizedException({
    statusCode: HttpStatus.UNAUTHORIZED,
    message: 'You are not login!',
    translationPath: 'AuthCustomResponse.NeedLogin'
  } as CustomHttpExceptionResponse);
};
