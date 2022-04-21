import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { CreateUserDTO, EditUserDTO, LoginUserDTO } from './user.dto';
import { User } from './user.interface';
import { UserService } from './user.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import  jwtModel from '../../jwt/index';

interface UserResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
  token?: string;
}
@ApiTags('账号操作')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // GET /user/users
  @ApiOperation({ summary: '获取所有用户信息' })
  @Get('users')
  async findAll(): Promise<UserResponse<User[]>> {
    return {
      code: 200,
      data: await this.userService.findAll(),
      message: 'Success.'
    };
  }

  // GET /user/:_id
  @ApiOperation({ summary: '查找单个用户信息' })
  @Get(':_id')
  async findOne(@Param('_id') _id: string): Promise<UserResponse<User>> {
    return {
      code: 200,
      data: await this.userService.findOne(_id),
      message: 'Success.'
    };
  }

  // POST /user
  @ApiOperation({ summary: '注册新用户' })
  @Post('add')
  async addOne(@Body() body: CreateUserDTO): Promise<UserResponse> {
    let username = body.username;
    let phone = body.phone;
    let res = await this.userService.conditionFind({ username });
    if (res && res.length > 0) {
      return {
        code: 200,
        message: `${username}已被注册`,
      }
    } else {
      let res1 = await this.userService.conditionFind({ phone });
      if (res1 && res1.length > 0) {
        return {
          code: 200,
          message: `${phone}已被注册`,
        }
      } else {
        await this.userService.addOne(body);
        return {
          code: 200,
          message: '注册成功'
        };
      }
    }
  }

  @ApiOperation({ summary: '登录' })
  @Post('login')
  async login(@Body() body: LoginUserDTO): Promise<UserResponse> {
    let username = body.username;
    let password = body.password;
    let res = await this.userService.conditionFind({ username, password });
    if (res && res.length > 0) {
      return {
        code: 200,
        message: '登录成功',
        token:jwtModel.jwtSign(body),
      }
    } else {
      return {
        code: 200,
        message: '登录失败，账号与密码不匹配'
      }
    }
  }

  // PUT /user/:_id
  @ApiOperation({ summary: '修改用户信息' })
  @Put(':_id')
  async editOne(
    @Param('_id') _id: string,
    @Body() body: EditUserDTO
  ): Promise<UserResponse> {
    await this.userService.editOne(_id, body);
    return {
      code: 200,
      message: 'Success.'
    };
  }

  // DELETE /user/:_id
  @ApiOperation({ summary: '删除用户' })
  @Delete(':_id')
  async deleteOne(@Param('_id') _id: string): Promise<UserResponse> {
    await this.userService.deleteOne(_id);
    return {
      code: 200,
      message: 'Success.'
    };
  }
}