import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './server/user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/fengxuan'), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
