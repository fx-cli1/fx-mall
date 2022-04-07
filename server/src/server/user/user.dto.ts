import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDTO {
  @ApiProperty({ description: '用户账户' })
  readonly user_name: string;
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
}

export class EditUserDTO {
  @ApiProperty({ description: '用户账户' })
  readonly user_name: string;
  @ApiProperty({ description: '用户密码' })
  readonly password: string;
}