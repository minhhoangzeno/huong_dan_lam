import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { TestSchema } from './schemas/test.schemas';
import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }])],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {}
