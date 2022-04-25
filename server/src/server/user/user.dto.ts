import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDTO {
  @ApiProperty({ description: '用户账户' })
  readonly username: string;
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
  @ApiProperty({ description: '手机号' })
  readonly phone: string;
}

export class EditUserDTO {
  @ApiProperty({ description: '用户账户' })
  readonly username: string;
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
  @ApiProperty({ description: '手机号码' })
  readonly phone: string;
}

export class LoginUserDTO {
  @ApiProperty({ description: '用户账户' })
  readonly username: string;
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
}

export class SetPasswordDTO {
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
}